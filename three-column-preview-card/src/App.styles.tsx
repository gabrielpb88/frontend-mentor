import styled from 'styled-components';

const lightGray = 'hsl(0, 0%, 95%)';
export const AppWrapper = styled.div`
  background-color: white;
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 3.2rem;
  min-height: 500px;
  width: calc(100vw - 4rem);
  max-width: 768px;

  @media screen and (min-width: 1024px) {
    width: 350px;
    height: 600px;
  }
`;

export const SedanCarCard = styled(CardWrapper)`
  border-radius: 1rem 1rem 0 0;

  background-color: hsl(31, 77%, 52%);
  color: hsl(31, 77%, 52%);

  @media screen and (min-width: 1024px) {
    grid-row: 1 / 1;
    grid-column: 1 / 1;

    border-radius: 1rem 0 0 1rem;
  }
`;

export const SuvCarCard = styled(CardWrapper)`
  background-color: hsl(184, 100%, 22%);
  color: hsl(184, 100%, 22%);

  @media screen and (min-width: 1024px) {
    grid-row: 1 / 1;
    grid-column: 2 / 2;
  }
`;

export const LuxuryCarCard = styled(CardWrapper)`
  background-color: hsl(179, 100%, 13%);
  color: hsl(179, 100%, 13%);
  border-radius: 0 0 1rem 1rem;

  @media screen and (min-width: 1024px) {
    grid-row: 1 / 1;
    grid-column: 3 / 3;

    border-radius: 0 1rem 1rem 0;
  }
`;

export const Image = styled.img`
  width: 60px;
`;

export const Header = styled.h2`
  font-size: 2.5rem;
  font-family: 'Big Shoulders Display', cursive;
  color: ${lightGray};
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: hsla(0, 0%, 100%, 0.75);

  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  padding: 1rem;
  border: 2px solid white;
  border-radius: 2rem;
  background-color: ${lightGray};
  color: inherit;

  width: 70%;
  text-align: center;

  :active {
    background-color: transparent;
    color: white;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 6rem;
  }
`;

export const CardsWrapper = styled.div`
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto auto;
  }
`;
