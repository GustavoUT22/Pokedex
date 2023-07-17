import styled from "@emotion/styled";
import { colors } from "../styles/colors";
export const ContainerApp = styled.div`
  max-width: 414px;
  margin: auto;
  height: 100vh;
  background-color: ${colors.primary};
  padding: 4px;
`;

export const PokemonType = styled.div`
  display: inline-flex;
  padding: 2px 8px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background-color: ${(props) => props.color};
`;

export const Title = styled.h1`
  color: ${colors.grayscale.white};
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const Containertitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 10px;
`;

export const ContainerHeader = styled.div`
  padding: 12px 12px 24px;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  border-radius: 20px;
  width: 100%;
  gap: 8px;
  background-color: ${colors.grayscale.white};
`;

export const ContainerList = styled.div`
  padding: 24px 12px 0px;
`;

export const SpaceBetweenRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;

export const InputSearch = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

export const SortInput = styled.input``;
