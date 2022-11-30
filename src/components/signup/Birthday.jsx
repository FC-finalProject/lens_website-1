import React from 'react';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import { InforEach, InputField, Label } from './SingupForm';

export default function Birthday({ register }) {
  return (
    <InforEach>
      <Label>생일 {SignupConstant.CATEGORY.optional}</Label>
      <InputField type="date" {...register('birthday')} />
    </InforEach>
  );
}
