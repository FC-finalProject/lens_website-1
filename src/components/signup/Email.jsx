import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import { EMAIL_REG } from '../../utils/reg';
import { InforEach, Label, InputField, RepetitionCheckBtn } from './SingupForm';

export default function Email({ register, errors }) {
  return (
    <>
      <InforEach>
        <Label>{SignupConstant.CATEGORY.email}</Label>
        <InputBox>
          <InputField
            {...register('email', {
              required: true,
              pattern: {
                value: EMAIL_REG,
                message: SignupConstant.ERROR_MESSAGE.email_wrong_form,
              },
            })}
          />
          <RepetitionCheckBtn
            onClick={async (e) => {
              e.preventDefault();
            }}
          >
            {SignupConstant.CATEGORY.duplicate_check}
          </RepetitionCheckBtn>
        </InputBox>
      </InforEach>
      {errors.email && errors.email.message}
    </>
  );
}

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
