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
  ::placeholder {
    color: ${colors.grayscale.light};
  }
`;

function Input({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <div>
      {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
      <StyledInput
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
