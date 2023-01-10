import React from 'react';
import MenuButton from '../MenuButton';
import {
  Container,
  Top,
  LogoWrapper,
  Logo,
  TweetButton,
  TweetIcon,
  Bottom,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Top>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <MenuButton icon='home'>Página Incial</MenuButton>
        <MenuButton icon='explore'>Explorar</MenuButton>
        <MenuButton icon='bell'>Notificações</MenuButton>
        <MenuButton icon='email'>Mensagens</MenuButton>
        <MenuButton icon='saved'>Salvos</MenuButton>
        <MenuButton icon='list'>Listas</MenuButton>
        <MenuButton icon='perfil' className="active">Perfil</MenuButton>
        <MenuButton icon='more'>Ver mais...</MenuButton>

        <TweetButton className='tweet-button'>
          <TweetIcon />
          <span>Tweetar</span>
        </TweetButton>
      </Top>

      <Bottom>
        <Avatar />
        <ProfileData>
          <strong>Vitor Markis</strong>
          <span>@vitormarkis998</span>
        </ProfileData>
        <ExitIcon />
      </Bottom>
    </Container>
  );
};

export default MenuBar;
