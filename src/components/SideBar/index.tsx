import React from 'react';
import FollowSuggestions from '../FollowSuggestions';
import News from '../News';

import List from '../List';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import ReactStickyBox from 'react-sticky-box';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <ReactStickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestions
                name="Pablo Ferrari"
                nickname="@pabloferrari"
              />,
              <FollowSuggestions
                name="Pablo Ferrari"
                nickname="@pabloferrari"
              />,
              <FollowSuggestions
                name="Pablo Ferrari"
                nickname="@pabloferrari"
              />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />
        </Body>
      </ReactStickyBox>
    </Container>
  );
};

export default SideBar;
