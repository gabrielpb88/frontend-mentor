import styled from 'styled-components';

export const AppWrapper = styled.div`
  background-color: white;
  display: grid;
  grid-template-areas: 'sedanCar' 'suvCar' 'luxuryCar';
  place-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 3.2rem;
  min-height: 400px;
  max-width: calc(100vw - 4rem);
`;

export const SedanCarCard = styled(CardWrapper)`
  border-radius: 1rem 1rem 0 0;

  grid-area: sedanCar;
  background-color: hsl(31, 77%, 52%);
  color: hsl(31, 77%, 52%);
`;

export const SuvCarCard = styled(CardWrapper)`
  grid-area: suvCar;
  background-color: hsl(184, 100%, 22%);
  color: hsl(184, 100%, 22%);
`;

export const LuxuryCarCard = styled(CardWrapper)`
  grid-area: luxuryCar;
  background-color: hsl(179, 100%, 13%);
  color: hsl(179, 100%, 13%);
  border-radius: 0 0 1rem 1rem;
`;

export const Image = styled.img`
  width: 60px;
`;

export const Header = styled.h2`
  font-size: 2.5rem;
  font-family: 'Big Shoulders Display', cursive;
  color: white;
  text-transform: uppercase;
`;

export const Description = styled.p`
  color: white;
`;

export const Button = styled.a`
  text-decoration: none;
  padding: 1rem;
  border: 2px solid white;
  border-radius: 2rem;
  background-color: white;
  color: inherit;

  width: 70%;
  text-align: center;

  :active {
    background-color: transparent;
    color: white;
  }
`;

export const CardsWrapper = styled.div`
  padding: 2rem;
`;
