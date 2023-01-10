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
  display: flex;
  align-items: center;
  gap: 11px;

  svg {
    position: relative;
    fill: var(--gray);
    z-index: 5;

    path {
      fill: var(--gray);
    }
  }

  > p {
    font-size: 14px;
    line-height: 1;
    color: var(--gray);
  }

  &:nth-child(1) {
    svg {
      transform: rotate(270deg);
    }
  }

  &:nth-of-type(1):hover,
  &:nth-of-type(2):hover,
  &:nth-of-type(5):hover {
    > div > div {
      background-color: var(--twitter-interaction-hover);
    }
    svg {
      > path {
        fill: var(--twitter-light-hover);
      }
    }
    > p {
      color: var(--twitter-light-hover);
    }
  }

  &:nth-of-type(3):hover {
    > div > div {
      background-color: var(--twitter-retweet-hover);
    }
    svg {
      > path {
        fill: var(--retweet);
      }
    }
    > p {
      color: var(--retweet);
    }
  }

  &:nth-of-type(4):hover {
    > div > div {
      background-color: var(--twitter-like-hover);
    }
    svg {
      > path {
        fill: var(--like);
      }
    }
    > p {
      color: var(--like);
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const IconHover = styled.div`
  position: absolute;
  height: calc(100%);
  width: calc(100%);

  left: 50%;
  top: 50%;
  padding: 15px;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 33%;
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
