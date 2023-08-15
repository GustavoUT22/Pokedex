import styled from "@emotion/styled";
import { MdFavoriteBorder } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const FooterWrapper = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: a;
  padding: 10px 15%; /* Agregamos un poco de espacio interno para el contenido del footer */
  align-items: center;
  justify-content: center;
  background-color: ${(props) => `#${props.footerColor}`};
  height: 6vh;
  left: 0;
  right: 0;
`;

function Footer({ footerColor = "DC0A2D" }) {
  return (
    <FooterWrapper footerColor={footerColor}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <FaRegUser style={{ width: "30px", height: "30px" }} />
        <RiHome2Line style={{ width: "30px", height: "30px" }} />
        <MdFavoriteBorder style={{ width: "30px", height: "30px" }} />
      </div>
    </FooterWrapper>
  );
}

export default Footer;
