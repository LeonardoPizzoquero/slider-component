import styled from 'styled-components';

interface ImageProps {
  index: number;
  current: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  height: 100vh;
`;

export const Image = styled.img<ImageProps>`
  position: absolute;
  z-index: ${(props) => props.index};
  opacity: ${(props) => (props.current ? '1' : '0')};
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  max-height: 100vh;
  height: 100%;
`;

export const ArrowLeft = styled.button`
  position: absolute;
  z-index: 100;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  width: 200px;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowRight = styled.button`
  position: absolute;
  z-index: 100;
  right: 0%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  width: 200px;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
