import React from 'react';
import Feed from '../Feed';

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

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar></Avatar>
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Guilherme Rodz</h1>
        <h2>@guilherme_rodz</h2>

        <p>Developer</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo - Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 14 de dezembro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100 </strong>
          </span>
          <span>
            <strong>200 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
