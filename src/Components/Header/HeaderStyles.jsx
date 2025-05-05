import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    height: 40px;
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      color: #000;
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
      transition: color 0.1s;

      &:hover {
        color: #aaa2a2;
      }
    }
  }
`;
