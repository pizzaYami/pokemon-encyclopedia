import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function PokemonCard({ item }) {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`/card/${item.id}`);
      }}
    >
      <img src={item.images.large} alt="pokemon-img" />
    </Container>
  );
}

export default PokemonCard;

const Container = styled.div`
  max-width: 30%;
  @media screen and (max-width: 991px) {
    max-width: 100%;
    pointer-events: none;
  }
  &:hover {
    transition: 0.5s;
    transform: scale(1.5);
  }
`;
