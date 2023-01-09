import React from 'react';
import List from '../List';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[<h1>Testee</h1>, <h1>Testee</h1>, <h1>Testee</h1>]}
        ></List>

        <List
          title="Talvez você curta"
          elements={[<h1>Testee</h1>, <h1>Testee</h1>, <h1>Testee</h1>]}
        ></List>

        <List
          title="Talvez você curta"
          elements={[<h1>Testee</h1>, <h1>Testee</h1>, <h1>Testee</h1>]}
        ></List>

        <List
          title="Talvez você curta"
          elements={[<h1>Testee</h1>, <h1>Testee</h1>, <h1>Testee</h1>]}
        ></List>
      </Body>
    </Container>
  );
};

export default Sidebar;
