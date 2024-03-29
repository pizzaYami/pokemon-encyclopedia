import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function PokemonCardDetail() {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();
  const getData = async () => {
    let url = `https://api.pokemontcg.io/v2/cards/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <img src={pokemon?.data.images.large} alt="pokemon" />
      <Wrap>
        <div>
          <div>Name</div>
        </div>
        <div>{pokemon?.data.name}</div>
      </Wrap>
    </Container>
  );
}

export default PokemonCardDetail;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 20px 20px 0;
  gap: 20px;
  img {
    width: 50%;
  }
`;

const Wrap = styled.div`
  display: flex;
  width: 40%;
  & > div {
    flex-grow: 1;
  }
`;
