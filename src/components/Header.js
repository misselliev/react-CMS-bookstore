import React from 'react';
import styled from '@emotion/styled';


export const Header = styled.header`
  height: 95px;
  background-color: #ffffff;
`;

export const Title = styled.div`
  width: 240px;
  height: 37px;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0290ff;
  margin: 0 0 29px 100px;
  padding-top:29px;
  `;

const MainHeader = () => {
  return (
    <Header>
      <Title>Bookstore CMS</Title>
    </Header>
  )
};

export default MainHeader;