import styled from 'styled-components';
import { Exit } from '../../styles/Icons';

export const Container = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background-color: var(--gray);

  background-image: ${(props) =>
    props.avatar ? `url(${props.avatar})` : 'unset'};
  background-size: cover;
`;

export const ProfileData = styled.div`
  @media (max-width: 860px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  margin-left: 10px;

  font-size: 14px;

  > span {
    color: var(--gray);
  }
`;

export const ExitIcon = styled(Exit)`
  @media (max-width: 860px) {
    display: none;
  }

  margin-left: auto;
  width: 24px;
  height: 24px;

  path {
    fill: var(--gray);
  }
  &:hover {
    path {
      fill: #fff;
    }
    cursor: pointer;
  }
`;
