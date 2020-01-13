import React from 'react';
import CategoryFilter from './CategoryFilter';
import { Header, Title } from './styles/HeaderStyle';

const MainHeader = () => {
  return (
    <Header>
      <Title>Bookstore CMS</Title>
      <CategoryFilter />
    </Header>
  )
};

export default MainHeader;
