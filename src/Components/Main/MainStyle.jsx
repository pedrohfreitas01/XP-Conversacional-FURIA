import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const GamesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const MatchCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 280px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  strong {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: #111;
  }

  p {
    margin: 0.5rem 0;
    color: #333;
  }

  img {
    width: 100%;
  }
`;

export const GamesSection = styled.section`
  padding: 2rem;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const GameCard = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  &:hover {
    transform: scale(1.1); 
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); 

    /* shadow botom to top dos cards modalidade */
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60%; /*
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 100%
      );
      opacity: 1; /*   */
      transition: opacity 0.3s ease;
    }

    span {
      opacity: 1; 
      transform: translateY(
        0
      ); 
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%; 
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.3s ease; 
  }

  span {
    position: absolute;
    margin-top: 203px;
    transform: translate(-50%, 50%); 
    width: 80%; 
    padding: 0.6rem;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem; 
    text-align: center;
    letter-spacing: 1px;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
    opacity: 0; 
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 1; 
  }
`;
