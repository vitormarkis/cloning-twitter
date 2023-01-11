import styled, { css } from 'styled-components';

import { Favorite, Chat, Bars, Share, Retweet } from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 5.5px;
  margin: 12px 0 0;
  width: 100%;

  @media (min-width: 440px) {
    width: 77%;
  }

  > div {
    cursor: pointer;

    /* &:hover {
            opacity: 0.7;
        } */
  }
`;

export const Status = styled.div`
  
`;

export const IconWrapper = styled.div`
  
`;

export const IconHover = styled.div`
  
`;

const iconsCSS = css({
  width: '19px',
  height: '19px',
});

export const ViewsIcon = styled(Bars)`
  ${iconsCSS}
`;
export const ShareIcon = styled(Share)`
  ${iconsCSS}
`;
export const CommentIcon = styled(Chat)`
  ${iconsCSS}
`;
export const RetweetIcon = styled(Retweet)`
  ${iconsCSS}
`;
export const LikeIcon = styled(Favorite)`
  ${iconsCSS}
`;
