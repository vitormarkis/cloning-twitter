import styled from 'styled-components';
import { AvatarProps } from '../../types';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div<AvatarProps>`
  width: 49px;
  height: 49px;

  background-color: var(--gray);
  background-image: ${(props) => (props.avatar ? `url(${props.avatar})` : 'unset')};
  background-size: cover;

  border-radius: 50%;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }
  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 7px;
`;
