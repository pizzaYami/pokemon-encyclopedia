import React, { useEffect, useState } from "react";

import PokemonCard from "../component/PokemonCard";
import styled from "styled-components";

function Home() {
  const [pokemonList, setPokemonList] = useState();

  const getData = async () => {
    let url = `https://api.pokemontcg.io/v2/cards`;
    let res = await fetch(url);
    let data = await res.json();

    setPokemonList(data.data.slice(0, 50));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {pokemonList?.map((item) => (
        <PokemonCard key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  margin: 40px 40px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;
