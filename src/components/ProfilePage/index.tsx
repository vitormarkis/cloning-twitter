import React, { useEffect, useState } from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';
import Feed from '../Feed';
import { UserdataProps } from './types';
import { spreadData } from '../../scripts/functionals';

const ProfilePage: React.FC = () => {
  const [userdata, setUserdata] = useState<UserdataProps>();

  useEffect(() => {
    spreadData(setUserdata, 'users', { username: 'dieegosf' });
  }, []);

  return (
    <Container>
      <Banner banner={userdata?.banner}>
        <Avatar avatar={userdata?.avatar} />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>{userdata?.name}</h1>
        <h2>{userdata?.username}</h2>

        <p>{userdata?.bio}</p>

        <ul>
          <li>
            <LocationIcon />
            {userdata?.details.from}
          </li>
          <li>
            <CakeIcon />
            {userdata?.details.birth}
          </li>
        </ul>

        <Followage>
          <span>
            <strong>{userdata?.followage.following}</strong> seguindo
          </span>
          <span>
            <strong>{userdata?.followage.followers}</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
