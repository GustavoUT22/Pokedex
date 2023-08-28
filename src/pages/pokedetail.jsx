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
  width: 312px;
  text-align: center;
  font-size: 18px;
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
  width: 280px;
  height: 280px;
  position: absolute;
  left: 20%;
  bottom: 50%;
`;
const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 16px 8px;
`;

const StatInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-evenly;
`;

const NameStat = styled.span`
  color: ${(props) => colors.type[props.color]};
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-align: right;
`;

const NameStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px 0px 2px;
  border-right: 1px solid #e8dede;
  gap: 8px;
`;

const NumericStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* width: 100%; */
`;
const WrapperStat = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`;

const NumberStat = styled.div`
  width: 19px;
  color: #1d1d1d;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */
`;

const FilledBar = styled.progress`
  display: flex;
  height: 10px;
  appearance: none;

  ::-webkit-progress-value {
    background-color: ${(props) =>
      colors.type[props.color]}; /* Color de progreso */
    border-radius: 20px;
  }

  ::-webkit-progress-bar {
    background-color: #e8dede; /* Color de fondo */
    border-radius: 20px;
  }
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

  const nameStats = ["hp", "atk", "def", "satk", "sdef", "spd"];

  return (
    <PokeWrapper color={pokemonData?.types[0].type.name}>
      <ContainerPokemon>
        <ContainerHeaderDetail>
          <BiArrowBack
            onClick={handleBack}
            style={{
              width: "32px",
              height: "32px",
              color: "white",
              cursor: "pointer",
            }}
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
          <About color={pokemonData?.types[0].type.name}>About</About>
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
          <ContainerStats>
            <StatInfo>
              <NameStatsWrapper>
                {nameStats.map((ele) => (
                  <NameStat color={pokemonData?.types[0].type.name}>
                    {ele.toUpperCase()}
                  </NameStat>
                ))}
              </NameStatsWrapper>
              <NumericStats>
                {pokemonData?.stats.map((ele) => (
                  <WrapperStat>
                    <NumberStat>{ele.base_stat}</NumberStat>

                    <FilledBar
                      max="255"
                      value={ele.base_stat}
                      color={pokemonData?.types[0].type.name}
                    >
                      {((ele.base_stat / 255) * 100).toFixed(1)}%
                    </FilledBar>
                  </WrapperStat>
                ))}
              </NumericStats>
            </StatInfo>
          </ContainerStats>
        </ContainerDataPoke>
      </ContainerPokemon>
    </PokeWrapper>
  );
}

export default PokeDetail;
