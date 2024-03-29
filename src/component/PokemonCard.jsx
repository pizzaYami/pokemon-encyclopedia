import React from "react";
import styled from "styled-components";

function PokemonCard({ item }) {
  console.log(item.name);

  return (
    <Container>
      <img src={item.images.small} alt="pokemon-img" />
      <div>{item.name}</div>
    </Container>
  );
}

export default PokemonCard;

const Container = styled.div`
  width: 25%;
`;
