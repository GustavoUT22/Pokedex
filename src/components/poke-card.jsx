import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import PokeBackground from "../assets/pokebackground.png";
import { useAsyncError, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemon-services";

const PokeCardWrapper = styled.div`
  display: flex;
  width: 104px;
  height: 108px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: ${colors.grayscale.white};
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const PokeCardNameWrapper = styled.div`
  display: flex;
  padding: 24px 8px 4px 8px;
  align-self: stretch;
  justify-content: center;
  border-radius: 7px;
  background-color: ${colors.grayscale.background};
`;

const PokeCardNumber = styled.div`
  display: flex;
  padding: 4px 8px 0px 8px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const PokeBackgroundImg = styled.img`
  display: flex;
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  left: 16px;
`;

const PokeNumber = styled.span`
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  text-align: right;
  color: ${colors.grayscale.medium};
`;

const PokeCardName = styled.div`
  color: ${colors.grayscale.dark};
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */
`;

function PokeCard({ pokeName }) {
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemon(pokeName).then(setPokemon).catch(console.log);
  }, [pokeName]);

  const idStr = pokemon?.id.toString();
  const pokeNumber =
    idStr?.length > 2
      ? `#${idStr}`
      : idStr?.length > 1
      ? `#0${idStr}`
      : `#00${idStr}`;

  function handleClick(id) {
    navigate(`/pokedex/${id}`);
  }

  return (
    <PokeCardWrapper onClick={() => handleClick(pokemon.id)}>
      <PokeCardNumber>
        <PokeNumber>{pokeNumber}</PokeNumber>
      </PokeCardNumber>
      <PokeBackgroundImg
        src={pokemon?.sprites.other["official-artwork"].front_default}
      />
      <PokeCardNameWrapper>
        <PokeCardName>{pokeName}</PokeCardName>
      </PokeCardNameWrapper>
    </PokeCardWrapper>
  );
}
export default PokeCard;
