import React from 'react';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import { InforEach, InputField, Label } from './SingupForm';

export default function Birthday({ register }) {
  return (
    <InforEach>
      <Label>
        {SignupConstant.CATEGORY.birthday}
        {SignupConstant.CATEGORY.optional}
      </Label>
      <InputField
        type="date"
        {...register('birthday', {
          setValueAs: (value) => value || '2000-01-01',
        })}
      />
    </InforEach>
  );
}
