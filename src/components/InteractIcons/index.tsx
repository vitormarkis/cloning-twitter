import React from 'react';

import { 
    Container,
    Icons,
    Status,
    IconWrapper,
    IconHover,
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
                <IconWrapper>
                    <IconHover />
                    <ViewsIcon />
                </IconWrapper>
                <p>2,9mi</p>
            </Status>
            <Status>
                <IconWrapper>
                    <IconHover />
                    <CommentIcon />
                </IconWrapper>
                <p>18</p>
            </Status>
            <Status>
                <IconWrapper>
                    <IconHover />
                    <RetweetIcon />
                </IconWrapper>
                <p>18</p>
            </Status>
            <Status>
                <IconWrapper>
                    <IconHover />
                    <LikeIcon />
                </IconWrapper>
                <p>372</p>
            </Status>
            <Status>
                <IconWrapper>
                    <IconHover />
                    <ShareIcon />
                </IconWrapper>
            </Status>
        </Icons>
    </Container>
  );
}

export default InteractIcons;