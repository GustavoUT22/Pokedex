import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f0f0f0; /* Agregamos un color de fondo para el footer */
  padding: 10px 0; /* Agregamos un poco de espacio interno para el contenido del footer */
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
        }}
      >
        <div>Profile</div>
        <div>Home</div>
        <div>Favoritos</div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
