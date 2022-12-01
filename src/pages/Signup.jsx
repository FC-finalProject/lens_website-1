import React from 'react';
import styled from 'styled-components';
import Title from '../components/login/Title';
import SingupForm from '../components/signup/SingupForm';
import { SignupConstant } from '../utils/constant/SignupConstant';

export default function Signup() {
  return (
    <>
      <SingupBox>
        <Title
          subText={SignupConstant.TITLE.sub}
          text={SignupConstant.TITLE.main}
        />
        <SingupForm />
      </SingupBox>
    </>
  );
}

const SingupBox = styled.div`
  width: 534px;
  margin: 100px auto;
  border: solid gray 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans KR';
`;
