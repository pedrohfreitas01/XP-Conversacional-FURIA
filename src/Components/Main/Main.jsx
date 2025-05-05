import React from "react";
import {
  Container,
  Title,
  GamesWrapper,
  GamesSection,
  GameCard,
  MatchCard,
} from "./MainStyle";

function Main() {
  return (
    <main>
      <Container>
        <Title>Próximos Jogos</Title>
        <GamesWrapper>
          <MatchCard>
            <img
              src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/03/Kings-League-Brazil-e1742269543494.png?w=1200&h=675&crop=1"
              alt=""
            />
            <strong>Kings League </strong>
            <p>5 de maio - FURIA vs Fluxo</p>
            <p>3 de maio - Funkbol vs FURIA</p>
          </MatchCard>

          <MatchCard>
            <img
              src="https://triibo.com.br/wp-content/uploads/2025/01/imagem_2025-01-20_153157657.png"
              alt=""
            />
            <strong>League of Legends</strong>
            <p>3 de maio - FURIA x Red Canids - 12h</p>
            <p>11 de maio - FURIA x Fluxo - 12h</p>
          </MatchCard>
        </GamesWrapper>
      </Container>

      {/* <Carrossel/> */}

      <GamesSection>
        <Title>Modalidades da FURIA</Title>
        <GamesWrapper>
          <GameCard>
            <img
              src="https://noticias.maisesports.com.br/wp-content/uploads/2025/01/furia-lol-lta-sul-2025-1120x630.jpg"
              alt="LOL"
            />
            <span>League of Legends</span>
          </GameCard>
          <GameCard>
            <img
              src="https://assets.gamearena.gg/wp-content/uploads/2025/01/23202839/FURIA-VALORANT-2025.jpg"
              alt="Valorant"
            />
            <span>Valorant</span>
          </GameCard>
          <GameCard>
            <img
              src="https://s2-ge.glbimg.com/xyRIIWza4ZaBZv5-Rrp4sj-wKUw=/0x0:1600x1066/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/C/L/jLOeZZRAaB9emC2g6gTg/furia-rainbow-six.jpg"
              alt="CS:GO"
            />
            <span>Rainbow Six</span>
          </GameCard>
          <GameCard>
            <img
              src="https://cms-br.kingsleague.pro/wp-content/uploads/2025/03/FULL-TIME-BRA-FURIA-FC-1-1024x576.jpg"
              alt="Fut7"
            />
            <span>Kings League Brasil</span>
          </GameCard>
        </GamesWrapper>
      </GamesSection>
    </main>
  );
}

export default Main;
