import React from 'react';

import Main from '../Main'
import Tweet from '../Tweet'

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
        <Wrapper>
            {/* <MenuBar /> */}
            <Main />
            {/* <Sidebar /> */}
        </Wrapper>
      <Tweet />
    </Container>
  )
}

export default Layout;