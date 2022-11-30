import React from 'react';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import { Label, InputField, ErrorMessage, InforEach } from './SingupForm';

export default function Username({ register, errors }) {
  return (
    <InforEach>
      <Label>{SignupConstant.CATEGORY.username}</Label>
      <InputField
        {...register('username', {
          requried: true,
          minLength: {
            value: 5,
            message: SignupConstant.ERROR_MESSAGE.no_username,
          },
        })}
      />
      {errors.username && (
        <ErrorMessage>{errors.username.message}</ErrorMessage>
      )}
    </InforEach>
  );
}
