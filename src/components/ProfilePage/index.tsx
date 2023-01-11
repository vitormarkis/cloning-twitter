import React, { useEffect, useState } from 'react';

import { UserdataProps } from '../../types/API-Objects';

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
import { spreadData } from '../../scripts/functionals';
import { sessionUser } from '../../scripts/controls';

const ProfilePage: React.FC = () => {
  const [userdata, setUserdata] = useState<UserdataProps>();

  useEffect(() => {
    async function spreadUserdata() {
      const userdataResponse = await spreadData('users', sessionUser);
      console.log('userdataResponse', userdataResponse)
      setUserdata(userdataResponse as UserdataProps)
    }

    spreadUserdata()
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
