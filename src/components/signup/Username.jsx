import React from 'react';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import { Label, InputField, InforEach } from './SingupForm';

export default function Username({ register }) {
  return (
    <InforEach>
      <Label>{SignupConstant.CATEGORY.username}</Label>
      <InputField
        {...register('username', {
          requried: {
            value: true,
            message: SignupConstant.ERROR_MESSAGE.no_username,
          },
          minLength: {
            value: 5,
            message: SignupConstant.ERROR_MESSAGE.no_username,
          },
        })}
      />
    </InforEach>
  );
}
