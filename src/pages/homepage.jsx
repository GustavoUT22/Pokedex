import styled from "@emotion/styled";
import { MdHeight, MdSearch } from "react-icons/md";
import {
  ContainerCards,
  Container,
  ContainerApp,
  Containertitle,
  ContainerWrap,
  SpaceBetweenRow,
  InputSearch,
  SearchWrapper,
  PokemonType,
  Title,
} from "../components/utils";
import { TbPokeball } from "react-icons/tb";
import { colors } from "../styles/colors";
import PokeCard from "../components/poke-card";
import PokeDetail from "./pokedetail";
import { useEffect, useState } from "react";
import { getPokemon, getPokemons } from "../services/pokemon-services";
import ButtonSort from "../components/button-sort";

const SearchButton = styled.button`
  border: none;
  border-radius: 16px;
  background-color: ${colors.primary};
  color: white;
  padding: 2px 10px;
  :hover {
    background-color: #c63b3e;
  }
  :focus {
    opacity: 0.7;
  }
`;

function HomePage() {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState(null);
  const [status, setStatus] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    getPokemons().then(setPokemons).catch(console.log);
  }, []);
  // console.log(pokemons);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getPokemon(query)
      .then((data) => setStatus({ status: "search", data, error: null }))
      .catch(console.log);
  }

  return (
    <>
      <Container>
        <Containertitle>
          <TbPokeball
            style={{ color: "white", width: "30px", height: "30px" }}
          />
          <Title>Pokédex</Title>
        </Containertitle>
        <SpaceBetweenRow>
          <SearchWrapper onSubmit={handleSubmit}>
            <MdSearch
              style={{
                width: "16px",
                height: "16px",
                color: `${colors.primary}`,
              }}
            />
            <InputSearch
              type="text"
              placeholder="pokemon"
              name="pokemon"
              onChange={handleChange}
            />
            <SearchButton>Search</SearchButton>
          </SearchWrapper>
          <ButtonSort />
        </SpaceBetweenRow>
        <ContainerCards>
          <ContainerWrap>
            {status.status === "idle" &&
              pokemons &&
              pokemons.results.map((pokemon, index) => (
                <PokeCard key={`poke-${index}`} pokeName={pokemon?.name} />
              ))}
            {status.status === "search" && (
              <PokeCard pokeName={status.data?.name} />
            )}
          </ContainerWrap>
        </ContainerCards>
      </Container>
    </>
  );
}

export default HomePage;
