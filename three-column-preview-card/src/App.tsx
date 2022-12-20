import React from 'react';
import iconSedan from './assets/images/icon-sedans.svg';
import iconSuv from './assets/images/icon-suvs.svg';
import iconLuxury from './assets/images/icon-luxury.svg';
import * as S from './App.styles';

const App = () => {
  return (
    <S.AppWrapper>
      <S.CardsWrapper>
        <S.SedanCarCard>
          <S.Image src={iconSedan} alt="Icon of a sedan car" />
          <S.Header>Sedans</S.Header>
          <S.Description>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </S.Description>
          <S.Button href="#">Learn More</S.Button>
        </S.SedanCarCard>

        <S.SuvCarCard>
          <S.Image src={iconSuv} alt="Icon of an SUV" />
          <S.Header>SUVs</S.Header>
          <S.Description>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </S.Description>
          <S.Button href="#">Learn More</S.Button>
        </S.SuvCarCard>

        <S.LuxuryCarCard>
          <S.Image src={iconLuxury} alt="Icon of a luxury car" />
          <S.Header>Luxury</S.Header>
          <S.Description>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </S.Description>
          <S.Button href="#">Learn More</S.Button>
        </S.LuxuryCarCard>
      </S.CardsWrapper>
    </S.AppWrapper>
  );
};

export default App;
