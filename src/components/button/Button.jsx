import React from 'react';
import styled, { keyframes } from 'styled-components';

// Definición de los colores
const white = '#ececec';
const black = '#111111';
const red1 = '#e74c3c';
const red2 = '#c92918';
const colorPrimary = red1;
const colorSecondary = red2;
const cubicBezier = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';

// Animaciones
const topAnimation = keyframes`
  from {
    transform: translate(0rem, 0);
  }
  to {
    transform: translate(0rem, 3.5rem);
  }
`;

const bottomAnimation = keyframes`
  from {
    transform: translate(-11.5rem, 0);
  }
  to {
    transform: translate(0rem, 0);
  }
`;

// Estilos del botón
const Container = styled.div`
  width: auto;
  margin: auto;
`;

const Button = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  border: 0;
  position: relative;
  letter-spacing: 0.15em;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  background: transparent;
  outline: none;
  font-size: 28px;
  color: ${black};
  transition: all 0.5s ${cubicBezier} 0.15s;

  &::after,
  &::before {
    border: 0;
    content: '';
    position: absolute;
    height: 40%;
    width: 10%;
    transition: all 0.5s ${cubicBezier};
    z-index: -2;
    border-radius: 50%;
  }

  &::before {
    background-color: ${colorSecondary};
    top: -0.75rem;
    left: 0.5rem;
    animation: ${topAnimation} 2s ${cubicBezier} 0.25s infinite alternate;
  }

  &::after {
    background-color: ${colorPrimary};
    top: 3rem;
    left: 13rem;
    animation: ${bottomAnimation} 2s ${cubicBezier} 0.5s infinite alternate;
  }

  &:hover {
    color: ${white};
    &::before,
    &::after {
      top: 0;
      height: 100%;
      width: 100%;
      border-radius: 0;
      animation: none;
    }
    &::after {
      left: 0rem;
    }
    &::before {
      top: 0.5rem;
      left: 0.35rem;
    }
  }
`;

// Componente Button con los estilos definidos
const StyledButton = ({ text }) => {
  return (
    <Container>
      <Button>{text}</Button>
    </Container>
  );
};

export default StyledButton;


