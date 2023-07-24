import styled from "@emotion/styled";
import { MdHeight, MdSearch } from "react-icons/md";
import {
  ContainerCards,
  Container,
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

function HomePage() {
  return (
    <div>
      <Container>
        <Containertitle>
          <TbPokeball
            style={{ color: "white", width: "30px", height: "30px" }}
          />
          <Title>Pokédex</Title>
        </Containertitle>
        <SpaceBetweenRow>
          <SearchWrapper>
            <MdSearch
              style={{
                width: "16px",
                height: "16px",
                color: `${colors.primary}`,
              }}
            />
            <InputSearch type="text" placeholder="search" />
          </SearchWrapper>
          <button
            style={{ borderRadius: "50%", border: "none", padding: "8px" }}
          >
            AB
          </button>
        </SpaceBetweenRow>
        <ContainerCards>
          <ContainerWrap>
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
          </ContainerWrap>
        </ContainerCards>
      </Container>
    </div>
  );
}

export default HomePage;
