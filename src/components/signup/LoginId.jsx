import React from 'react';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import { InputBox } from './Email';
import {
  InforEach,
  Label,
  InputField,
  RepetitionCheckBtn,
  ErrorMessage,
} from './SingupForm';

export default function LoginId({ register, errors }) {
  return (
    <>
      <InforEach>
        <Label>{SignupConstant.CATEGORY.id}</Label>
        <InputBox>
          <InputField
            {...register('loginId', {
              required: true,
              minLength: {
                value: 8,
                message: SignupConstant.ERROR_MESSAGE.id_wrong_number,
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
      {errors.loginId && <ErrorMessage>{errors.loginId.message}</ErrorMessage>}
    </>
  );
}
