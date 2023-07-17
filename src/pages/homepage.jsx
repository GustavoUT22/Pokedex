import styled from "@emotion/styled";
import { MdHeight, MdSearch } from "react-icons/md";
import {
  ContainerHeader,
  Containertitle,
  SpaceBetweenRow,
  InputSearch,
  SearchWrapper,
  PokemonType,
  Title,
} from "../components/utils";
import { TbPokeball } from "react-icons/tb";
import { colors } from "../styles/colors";

function HomePage() {
  return (
    <div>
      <ContainerHeader>
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
        <PokemonType color={"yellow"}>Fire</PokemonType>
      </ContainerHeader>
    </div>
  );
}

export default HomePage;
