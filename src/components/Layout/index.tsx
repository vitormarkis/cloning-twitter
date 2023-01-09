import React from 'react';
import styled from 'styled-components'

import MenuBar from '../MenuBar';
import Main from '../Main'
import Sidebar from '../Sidebar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <MenuBar />
            <Main />
            <Sidebar />
        </Wrapper>
    </Container>
  )
}

const NewMenuButton = styled(MenuButton)`
  outline: 2px solid #ff0;
`;

export default Layout;