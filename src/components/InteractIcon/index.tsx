import React from 'react';

import {
  Container,
  IconWrapper,
  IconHover,
  ViewsIcon,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
} from './styles';

interface InteractIconProps {
  children?: React.ReactNode;
  icon: 'views' | 'comments' | 'retweets' | 'likes' | 'share';
}

const InteractIcon: React.FC<InteractIconProps> = ({ children, icon }) => {
  const icons = {
    views: () => <ViewsIcon />,
    comments: () => <CommentIcon />,
    retweets: () => <RetweetIcon />,
    likes: () => <LikeIcon />,
    share: () => <ShareIcon />,
  };

  return (
    <Container>
      <IconWrapper>
        <IconHover />
        {icons[icon]()}
      </IconWrapper>
      {children}
    </Container>
  );
};

export default InteractIcon;
