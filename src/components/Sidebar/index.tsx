import React from 'react';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import StickyBox from 'react-sticky-box';

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
        <SearchInput placeholder='Buscar no Twitter' />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox offsetBottom={0}>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSuggestion
                name='Filipe Deschamps'
                nickname='@FilipeDeschamps'
              />,
              <FollowSuggestion
                name='Diego Fernandes'
                nickname='@dieegosf'
              />,
              <FollowSuggestion
                name='Guilherme Rodz'
                nickname='@guilherme_rodz'
              />,
            ]}
          />

          <List
            title='Assuntos do momento'
            elements={[<News />, <News />]}
          />

          <List
            title='Assuntos do momento'
            elements={[<News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
