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

export const Container = styled.div`
  padding: 12px 12px 24px;
  height: 100vh;
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

export const ContainerCards = styled.div`
  height: 82vh;
  padding: 24px 20px 0px 20px;
  margin: auto;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
  background-color: ${colors.grayscale.white};
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: brown;
  }

  ::-webkit-scrollbar-track {
    background-color: none;
  }
`;

export const ContainerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-start;
`;

export const Button = styled.button`
  display: flex;
  width: 258px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: ${colors.grayscale.light};
`;

export const SortInput = styled.input``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 80px;
`;

export const Welcome = styled.span`
  width: 225px;
  color: ${colors.grayscale.white};
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;
