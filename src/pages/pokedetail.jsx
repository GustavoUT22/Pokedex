import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { BiArrowBack } from "react-icons/bi";
import PokeBackground from "../assets/Pokeball.svg";
import { PokemonType } from "../components/utils";
import { TbWeight } from "react-icons/tb";
import { VscSymbolRuler } from "react-icons/vsc";
import Charmander from "../assets/charmander.png";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemon-services";

const PokeWrapper = styled.div`
  max-width: 414px;
  margin: auto;
  height: 94vh;
  padding: 4px;
  background-color: ${(props) => colors.type[props.color]};
  position: relative;
`;

const ContainerPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 93vh;
`;

const PokemonName = styled.div`
  color: ${colors.grayscale};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  width: 284px;
  background: none;
  color: ${colors.grayscale.white};
`;

const PokemonNumber = styled.div`
  color: var(--grayscale-white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
`;

const ContainerHeaderDetail = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20px 24px 20px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const ContainerDataPoke = styled.div`
  display: flex;
  width: 400x;
  height: auto;
  padding: 56px 20px 0px 20px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--white, #fff);
`;

const ContainerTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const About = styled.span`
  color: ${(props) => colors.type[props.color]};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

const PhysicalData = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: none;
  gap: 50px;
  justify-content: center;
`;

const WeightData = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const Measures = styled.span`
  display: flex;
  color: ${colors.grayscale.dark};
  text-align: justify;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

const HeightData = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const MovesData = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameMeasure = styled.span`
  align-self: stretch;
  color: ${colors.grayscale.medium};
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 150% */
`;

const PokemonImg = styled.img`
  width: 250px;
  height: 250px;
  position: absolute;
  left: 30%;
  bottom: 50%;
`;

function PokeDetail() {
  const [pokemonData, setPokemonData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/pokedex");
  }

  useEffect(() => {
    getPokemon(id).then(setPokemonData).catch(console.log);
  }, []);

  const idStr = id.toString();
  const pokeNumber =
    idStr?.length > 2
      ? `#${idStr}`
      : idStr?.length > 1
      ? `#0${idStr}`
      : `#00${idStr}`;

  return (
    <PokeWrapper color={pokemonData?.types[0].type.name}>
      <ContainerPokemon>
        <ContainerHeaderDetail onClick={handleBack}>
          <BiArrowBack
            style={{ width: "32px", height: "32px", color: "white" }}
          />
          <PokemonName>{pokemonData?.name}</PokemonName>
          <PokemonNumber>{pokeNumber}</PokemonNumber>
        </ContainerHeaderDetail>
        {pokemonData && (
          <PokemonImg
            src={pokemonData?.sprites.other["official-artwork"].front_default}
            // alt="Pokemon Artwork"
            onError={(e) => console.error("Error loading image:", e)}
          />
        )}

        <ContainerDataPoke>
          <ContainerTypes>
            {pokemonData?.types.map((ele) => (
              <PokemonType color={ele.type.name}>{ele.type.name}</PokemonType>
            ))}
          </ContainerTypes>
          <About>About</About>
          <PhysicalData>
            <FlexColumn>
              <WeightData>
                <TbWeight style={{ height: "16px", width: "16px" }} />
                <Measures>{pokemonData?.weight}K</Measures>
              </WeightData>
              <NameMeasure>Width</NameMeasure>
            </FlexColumn>
            <FlexColumn>
              <WeightData>
                <VscSymbolRuler style={{ height: "16px", width: "16px" }} />
                <Measures>{pokemonData?.height}cm</Measures>
              </WeightData>
              <NameMeasure>Height</NameMeasure>
            </FlexColumn>
            <FlexColumn>
              <WeightData>
                {pokemonData?.abilities.map((ele, index) => (
                  <Measures key={`index-${index}`}>{ele.ability.name}</Measures>
                ))}
              </WeightData>
              <NameMeasure>Moves</NameMeasure>
            </FlexColumn>
          </PhysicalData>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            iaculis eros vitae tellus condimentum maximus sit amet in eros.
          </div>
          <About color={pokemonData?.types[0].type.name}>Base Stats</About>
          <div>
            <div>tipo</div>
            <div>borde</div>
            <div>number</div>
            <div>tipo</div>
            <div>borde</div>
            <div>number</div>
            <div>tipo</div>
            <div>borde</div>
          </div>
        </ContainerDataPoke>
      </ContainerPokemon>
    </PokeWrapper>
  );
}

export default PokeDetail;
// max stat 250 to have a good user experience
