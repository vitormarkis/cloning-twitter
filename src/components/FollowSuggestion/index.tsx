import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

type FollowSuggestionProps = {
  name: string;
  username: string;
  avatar: string;
};

const FollowSuggestion: React.FC<FollowSuggestionProps> = ({
  name,
  username,
  avatar,
}) => {
  return (
    <Container>
      <div>
        <Avatar avatar={avatar}/>
        <Info>
          <strong>{name}</strong>
          <span>{username}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
