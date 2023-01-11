import React, { useEffect, useState } from "react";
import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";
import StickyBox from "react-sticky-box";

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from "./styles";
import { spreadData } from "../../scripts/functionals";
import { FollowSuggestionProps, UserdataProps } from "../../types";


const Sidebar: React.FC = () => {
  const [follow, setFollow] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    async function getData() {
      const api_followSuggestion: Array<FollowSuggestionProps> = (await spreadData("follow_suggestion")) as Array<FollowSuggestionProps>;
      const api_users: Array<UserdataProps> = (await spreadData("users")) as Array<UserdataProps>;

      const followSuggestion = api_followSuggestion.filter((follow) => follow.active);

      const fsUsers = followSuggestion.map((follow) => {
        const user = api_users.find((user) => user.username === follow.username);
        if (!user) return;
        const { name, username, avatar } = user;
        return { name, username, avatar };
      });

      const react_node_array = fsUsers.map((fs) => {
        return (
          fs && (
            <FollowSuggestion
              name={fs.name}
              username={fs.username}
              avatar={fs.avatar}
            />
          )
        );
      });

      setFollow(react_node_array);
    }

    getData();
  }, []);

  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox offsetBottom={0}>
        <Body>
          <List
            title="Talvez você curta"
            elements={follow}
          />

          <List
            title="Assuntos do momento"
            elements={[<News />, <News />]}
          />

          <List
            title="Assuntos do momento"
            elements={[<News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
