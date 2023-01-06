import React from 'react';

import { 
    Container,
    Icons,
    Status,
    ViewsIcon,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
    ShareIcon,
 } from './styles';

const InteractIcons: React.FC = () => {
  return (
    <Container>
        <Icons>
            <Status>
                <ViewsIcon />
                2,9mi
            </Status>
            <Status>
                <CommentIcon />
                18
            </Status>
            <Status>
                <RetweetIcon />
                18
            </Status>
            <Status>
                <LikeIcon />
                372
            </Status>
            <Status>
                <ShareIcon />
            </Status>
        </Icons>
    </Container>
  );
}

export default InteractIcons;