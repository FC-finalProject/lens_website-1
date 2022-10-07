import React from 'react';
import styled from 'styled-components';

export default function Popup({ message, open }) {
  return (
    <PopupBox>
      <CloseIcon
        onClick={() => {
          open(false);
        }}
      >
        X
      </CloseIcon>
      <p> {message}</p>
      <ConfirmBtn
        onClick={() => {
          open(false);
        }}
      >
        확인
      </ConfirmBtn>
    </PopupBox>
  );
}

const PopupBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 408px;
  height: 237px;
  z-index: 99;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const CloseIcon = styled.button`
  background-color: white;
  border: none;
  font-size: 15px;
  padding-right: 20px;
  align-self: end;
  cursor: pointer;
`;

const ConfirmBtn = styled.button`
  background-color: #00b992;
  width: 344px;
  height: 48px;
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
`;
