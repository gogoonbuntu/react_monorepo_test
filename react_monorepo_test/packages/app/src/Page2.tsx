import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
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

const PopupOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
`;

const PopupContent = styled.div<{ show: boolean }>`
  background: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 0.3s ease-out;
`;

const CloseButton = styled(StyledButton)`
  background-color: #e74c3c;
  margin-top: 10px;

  &:hover {
    background-color: #c0392b;
  }
`;

export default function Page2() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

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
      <PopupOverlay show={showPopup}>
        <PopupContent show={showPopup}>
          <h2>Welcome to Page 2!</h2>
          <p>This is a popup that slides up from the bottom of the screen.</p>
          <CloseButton onClick={() => setShowPopup(false)}>Close</CloseButton>
        </PopupContent>
      </PopupOverlay>
    </PageContainer>
  );
}