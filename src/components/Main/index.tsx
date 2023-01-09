import ProfilePage from '../ProfilePage';
import React from 'react';
import Header from '../Header'
import BottomMenu from '../BottomMenu'

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />

        <ProfilePage />

        <BottomMenu />
    </Container>
  )
}

export default Main;