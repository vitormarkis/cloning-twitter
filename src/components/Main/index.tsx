import ProfilePage from '../ProfilePage';
import React from 'react';
import BottomMenu from '../BottomMenu'

import { Container, Header, BackIcon, ProfileInfo, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Vitor Markis</strong>
                <span>34 Tweets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage />

        <BottomMenu />
    </Container>
  )
}

export default Main;