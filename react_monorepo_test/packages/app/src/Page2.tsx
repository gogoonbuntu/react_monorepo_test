import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f4f8;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357abd;
  }
`;

const ModalOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 9999; // 매우 높은 z-index 값
`;

const ModalContent = styled.div<{ show: boolean }>`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 500px;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(-50px)')};
  transition: transform 0.3s ease-out;
`;

const CloseButton = styled(StyledButton)`
  background-color: #e74c3c;
  margin-top: 10px;

  &:hover {
    background-color: #c0392b;
  }
`;

const SliderContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const SliderLabel = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const SliderInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4a90e2;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4a90e2;
    cursor: pointer;
  }
`;

export default function Page2() {
  const [showModal, setShowModal] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <PageContainer>
      <h1>Page 2</h1>
      <Navigation>
        <Link to="/">
          <StyledButton>Prev</StyledButton>
        </Link>
        <Link to="/page3">
          <StyledButton>Next</StyledButton>
        </Link>
      </Navigation>
      <ModalOverlay show={showModal}>
        <ModalContent show={showModal}>
        <h2>투자 금액 설정</h2>
          <p>총 재산에 몇 퍼센트를 투자할까요??</p>
          <SliderContainer>
            <SliderLabel>{sliderValue}%</SliderLabel>
            <SliderInput
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </SliderContainer>
          <CloseButton onClick={() => setShowModal(false)}>Close</CloseButton>
        </ModalContent>
      </ModalOverlay>
    </PageContainer>
  );
}
