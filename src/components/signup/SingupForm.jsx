import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import { useCheckValidity } from '../../api/signupApi';
import Button from '../login/Button';

export default function SingupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValue: {
      loginId: '',
    },
  });
  const { refetch } = useCheckValidity('loginId', getValues('loginId'));

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <InforBox onSubmit={handleSubmit(onSubmit)}>
        <InforEach>
          <Label>{SignupConstant.CATEGORY.id}</Label>
          <InputField
            {...register('loginId', {
              minLength: {
                value: 8,
                message: SignupConstant.ERROR_MESSAGE.id_wrong_number,
              },
            })}
          />
          <RepetitionCheckBtn
            onClick={async (e) => {
              e.preventDefault();
              const data = await refetch();
              console.log(getValues('loginId'));
              console.log(errors.loginId?.message);

              if (data.data.data.data.exists) {
                console.log('이미 존재');
              }
            }}
          >
            {SignupConstant.CATEGORY.duplicate_check}
          </RepetitionCheckBtn>
          {errors.loginId && <p>{errors.loginId?.message}</p>}
        </InforEach>
        <Button value="submit"></Button>
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
  margin-bottom: 40px;
`;
export const Label = styled.label`
  font-size: 14px;
  color: #606060;
  padding-bottom: 15px;
`;

export const InputField = styled.input.attrs({ requried: true })`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  width: ${(props) => (props.short ? '238px' : '322px')};
  height: 16px;
  padding-bottom: 8px;

  &:focus {
    outline: none;
  }

  &::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;
const RepetitionCheckBtn = styled.button`
  transform: translate(260px, -50px);
  width: 72px;
  height: 48px;
  background-color: white;
  border: 1px solid #dedede;
  cursor: pointer;
`;
