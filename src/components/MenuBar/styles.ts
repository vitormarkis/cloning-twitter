import styled from 'styled-components';

import Button from '../Button'
import { Rocketseat } from '../../styles/Icons'
import { iconsCSS } from '../MenuButton';

export const Container = styled.div`
  @media (max-width: 540px) { display: none; }

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;

  @media (max-width: 859px) { width: unset }
  width: 240px;
  flex-shrink: 0;
  
  padding: 9px 20px 20px;

  max-height: 100vh;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 860px) {
    align-items: flex-start;
  }
  
`;

export const LogoWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 10px;
`;

export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--retweet);
  }
`;


export const TweetButton = styled(Button)`
    width: 100%;
    height: 39px;
    padding: 0;
    margin-top: 33px;
    position: relative;

    svg {
      width: 20px;
      height: 20px;
    }
    
  @media (max-width: 859px) {
    
    &.tweet-button {
      width: 39px;
      height: 39px;
      border-radius: 50%;
    }

    span {
      display: none;
    }
  }
`;










export const TweetIcon = styled(Rocketseat)`
  ${iconsCSS}
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  display: none;

  @media (max-width: 859px) { display: unset }

  path { fill: #fff; }
`;