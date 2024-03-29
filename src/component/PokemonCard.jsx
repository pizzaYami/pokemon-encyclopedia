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
      <img src={item.images.small} alt="pokemon-img" />
    </Container>
  );
}

export default PokemonCard;

const Container = styled.div`
  max-width: 30%;
  &:hover {
    transition: 0.5s;
    transform: scale(1.5);
    /* transition: transform 0.45s ease-out; */
    /* transform: rotateX(0) rotateY(0) rotateZ(0) translateZ(200px); */
  }
`;
