import React from 'react';

import { Container, Avatar, ProfileData, ExitIcon } from './styles';

const LoggedUser: React.FC = ({ name, username, avatar }) => {
  return (
    <Container>
      <Avatar avatar={avatar} />
      <ProfileData>
        <strong>{name}</strong>
        <span>{username}</span>
      </ProfileData>
      <ExitIcon />
    </Container>
  );
};

export default LoggedUser;
