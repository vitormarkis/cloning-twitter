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

import { PostDataProps } from '../Tweet/types';

const InteractIcons: React.FC<PostDataProps> = ({ views, comments, likes, retweets }) => {
  return (
    <Container>
        <Icons>
            <Status>
                <IconWrapper>
                    <IconHover />
                    <ViewsIcon />
                </IconWrapper>
                {views ? <p>{ views }</p> : ''}
            </Status>
            <Status>
                <IconWrapper>
                    <IconHover />
                    <CommentIcon />
                </IconWrapper>
                {comments ? <p>{ comments }</p> : ''}
            </Status>
            <Status>
                <IconWrapper>
                    <IconHover />
                    <RetweetIcon />
                </IconWrapper>
                {retweets ? <p>{ retweets }</p> : ''}
            </Status>
            <Status>
                <IconWrapper>
                    <IconHover />
                    <LikeIcon />
                </IconWrapper>
                {likes ? <p>{ likes }</p> : ''}
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