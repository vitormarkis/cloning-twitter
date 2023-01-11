import React, { useEffect, useState } from 'react';
import { sessionUser } from '../../scripts/controls';
import { spreadData } from '../../scripts/functionals';
import LoggedUser from '../LoggedUser';
import MenuButton from '../MenuButton';
import {
  Container,
  Top,
  LogoWrapper,
  Logo,
  TweetButton,
  TweetIcon,
} from './styles';


const MenuBar: React.FC = () => {
  const [user, setUser] = useState()
  
  useEffect(() => {
    async function spreadUserdata() {
      const userdataResponse = await spreadData('users', sessionUser);
      setUser(userdataResponse)
    }

    spreadUserdata()
  }, []);
  
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

      <LoggedUser {...user}/>
    </Container>
  );
};

export default MenuBar;
