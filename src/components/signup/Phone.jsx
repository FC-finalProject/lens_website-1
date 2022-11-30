import React from 'react';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import { PHONE_REG } from '../../utils/reg';
import { ErrorMessage, InforEach, InputField, Label } from './SingupForm';

export default function Phone({ register, errors }) {
  return (
    <InforEach>
      <Label>{SignupConstant.CATEGORY.phone} </Label>
      <InputField
        type="tel"
        {...register('phone', {
          pattern: {
            value: PHONE_REG,
            message: SignupConstant.ERROR_MESSAGE.phone_wrong_form,
          },
          setValueAs: (value) => value || '010-1111-1111',
        })}
      />
      {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
    </InforEach>
  );
}
