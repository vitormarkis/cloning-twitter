import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';
import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>
        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Vitor Markis</h1>
            <h2>@vitormarkis998</h2>

            <p>
                Studying Javascript, aprendendo React com o <a href="https://twitter.com/guilherme_rodz">@guilherme_rodz</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Rio Grande do Sul
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 10 de Junho de 2002
                </li>
            </ul>

        <Followage>
            <span>
                <strong>234</strong> seguindo
            </span>
            <span>
                <strong>132</strong> seguidores
            </span>
        </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;