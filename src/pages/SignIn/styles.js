import styled from "styled-components";
import BaseContainer from "../../components/BaseContainer";
import TCard from "../../components/Card";

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgroundColor};
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  /* text-transform: uppercase; */
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: center;
`;

export const VectorContainer = styled.div`
  object-fit: contain;
  width: 200px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Card = styled(TCard)`
  max-width: 500px;
  width: 90%;
`;