import React from "react";
import { Container } from "./HeaderStyles"; // Supondo que vai estilizar

function Header() {
  return (
    <header>
      <Container>
        <img
          src="https://furiagg.fbitsstatic.net/sf/img/logo-furia.svg?theme=main&v=202503171541"
          alt="logo Furia"
        />
        <nav>
          <a href="#">Home</a>
          <a href="#">Times</a>
          <a href="#">Agenda</a>
          <a href="#">Chat</a>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
