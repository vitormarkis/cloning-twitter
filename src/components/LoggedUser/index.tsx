import React from 'react';

import { Container, Avatar, ProfileData, ExitIcon } from './styles';

interface LoggedUser {
  name: string;
  username: string;
  avatar: string;
}

const LoggedUser: React.FC<LoggedUser> = ({ name, username, avatar }) => {
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
