import styled from "@emotion/styled";
import { colors } from "../styles/colors";

const StyledLabel = styled.label`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;
  color: ${colors.grayscale.white};
`;

const StyledInput = styled.input`
  display: flex;
  padding: 8px;
  width: 256px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${colors.grayscale.white};
`;

function Input({ label, type, name, value = "", placeholder }) {
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
