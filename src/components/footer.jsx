import styled from "@emotion/styled";
import { MdFavoriteBorder } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0; /* Agregamos un poco de espacio interno para el contenido del footer */
  height: 10vh;
`;

function Footer() {
  return (
    <FooterWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "400px",
          margin: "auto",
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
