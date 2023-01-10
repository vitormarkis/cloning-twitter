import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  Person,
  List,
  Hashtag,
  Saved,
  MoreCircle,
} from '../../styles/Icons'

type MenuButtonProps = {
    children: string;
    icon:
      'home' 
    | 'explore' 
    | 'bell' 
    | 'email' 
    | 'saved' 
    | 'list' 
    | 'perfil'
    | 'more'
    ;
    className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ children, icon, className }: MenuButtonProps) => {

    const setIcon = {
        home: () => <HomeIcon />,  
        explore: () => <ExploreIcon />,  
        bell: () => <BellIcon />,  
        email: () => <EmailIcon />,  
        saved: () => <SavedIcon />,  
        list: () => <ListIcon />,  
        perfil: () => <PerfilIcon />,  
        more: () => <MoreIcon />,  
    }
        
  return ( 
    <Container className={className}>
      <Hover>
        { setIcon[icon]() }
        <span>{ children }</span>
      </Hover>
    </Container>
  );
}

export default MenuButton;

const Container = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  > div > span { display: none; }

  @media (min-width: 860px) { 
    > div > span { 
    display: inline;
    margin-left: 8px;

    font-size: 19px;
    }
  }

   outline: 0;

   &.active {
    svg > path { fill: var(--twitter) }
    span { 
      color: var(--twitter); 
      font-weight: bold;
    }
   }
  
`;

const Hover = styled.div`
  flex-grow: 1;
  padding: 12px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(--twitter-dark-hover);
  }
`;

export const iconsCSS = css({
  width: '29px',
  height: '29px',
  fill: 'var(--gray)',
  '> path': {
    fill: 'var(--gray)',
  },
});

const HomeIcon = styled(Home)`${iconsCSS}`;
const BellIcon = styled(Notifications)`${iconsCSS}`;
const EmailIcon = styled(Email)`${iconsCSS}`;
const PerfilIcon = styled(Person)`${iconsCSS}`;
const SavedIcon = styled(Saved)`${iconsCSS}`;
const ListIcon = styled(List)`${iconsCSS}`;
const ExploreIcon = styled(Hashtag)`${iconsCSS}`;
const MoreIcon = styled(MoreCircle)`${iconsCSS}`;