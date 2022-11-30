import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from '../login/Button';
import LoginId from './LoginId';
import Email from './Email';
import Password from './Password';
import Gender from './Gender';
import Phone from './Phone';
import Username from './Username';
import Birthday from './Birthday';
import { usePostUser } from '../../api/signupApi';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import Popup from '../common/Popup';

export default function SingupForm() {
  const [userInfo, setUserInfo] = useState(SignupConstant.default_value);
  const [showPopup, setShowPopup] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    getValues,
    clearErrors,
    watch,
  } = useForm(userInfo);
  const { refetch } = usePostUser(userInfo);

  const onSubmit = async (userInput) => {
    delete userInput.passwordCheck;
    userInput.phone ||= '010-0000-0000';
    userInput.birthday ||= '2000-01-10';
    userInput.gender ||= 'X';

    setUserInfo(userInput);
    console.log(userInput);
    const { isSuccess } = await refetch();
    if (isSuccess) {
      setShowPopup(true);
    }
  };

  return (
    <>
      <InforBox onSubmit={handleSubmit(onSubmit)}>
        <LoginId
          register={register}
          watch={watch}
          setError={setError}
          clearErrors={clearErrors}
        />
        <Email
          register={register}
          watch={watch}
          setError={setError}
          clearErrors={clearErrors}
        />
        <Username register={register} errors={errors} />
        <Password
          register={register}
          errors={errors}
          setError={setError}
          getValues={getValues}
          clearErrors={clearErrors}
        />
        <Phone register={register} errors={errors} />
        <Birthday register={register} />
        <Gender register={register} />
        <Button text="회원가입하기"></Button>
        {showPopup && (
          <Popup message={SignupConstant.MESSAGE.success} show={setShowPopup} />
        )}
      </InforBox>
    </>
  );
}

const InforBox = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InforEach = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;
export const Label = styled.label`
  font-size: 14px;
  color: #606060;
  padding-bottom: 10px;
`;

export const InputField = styled.input.attrs({ requried: true })`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  width: 300px;

  &:focus {
    outline: none;
  }

  &::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;
export const RepetitionCheckBtn = styled.button`
  width: 72px;
  height: 48px;
  background-color: white;
  border: 1px solid #dedede;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  width: 322px;
  color: red;
`;
