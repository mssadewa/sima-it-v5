import styled from 'styled-components';

import Icons from '../../../Asset/icons';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0.5rem;
  height: 70px;

  //   border: 1px solid red;
  box-sizing: border-box;

  @media screen and (max-width: 768px) and (max-height: 920px) and (orientation: portrait) {
    visibility: visible;
  }

  visibility: hidden;
`;

const Input = styled.input`
  padding: 0.5rem;

  border-style: none none solid none;
  border-width: 1px;
  border-color: ${(props) => props.theme.light.typo.normal};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-width: 2px;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const LeftArrowSolid = styled(Icons.LeftArrowSolid)`
  max-width: 32px;
  margin: 10px;

  fill: ${(props) => props.theme.light.normal};
`;

const BarsSolid = styled(Icons.BarsSolid)`
  max-width: 32px;
  margin: 10px;

  fill: ${(props) => props.theme.light.normal};
`;

const mobileNavbar = {
  Container,
  Input,
  LeftArrowSolid,
  BarsSolid,
};

export default mobileNavbar;
