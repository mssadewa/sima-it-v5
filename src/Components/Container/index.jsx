import React from 'react';
import ContainerStyled from './container.styled';

const Container = (props) => {
  return <ContainerStyled>{props.children}</ContainerStyled>;
};

export default Container;
