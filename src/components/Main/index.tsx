import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackInfo,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackInfo />
        </button>

        <ProfileInfo>
          <strong>Pablo Ferrari</strong>
          <span> 1000 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" /> <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
