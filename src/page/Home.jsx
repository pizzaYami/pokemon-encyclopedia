import React, { useEffect, useState } from "react";

import PokemonCard from "../component/PokemonCard";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [pokemonList, setPokemonList] = useState();
  const [query, setQuery] = useSearchParams();
  console.log(query);

  const getData = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://api.pokemontcg.io/v2/cards?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    setPokemonList(data.data.slice(0, 20));
  };

  useEffect(() => {
    getData();
  }, [query]);

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
  flex-wrap: wrap;
  gap: 20px;
`;
