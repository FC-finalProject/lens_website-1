import React from 'react';
import { PHONE_REG } from '../../utils/reg';
import { ErrorMessage, InforEach, InputField, Label } from './SingupForm';

export default function Phone({ register, errors }) {
  return (
    <InforEach>
      <Label>전화번호 </Label>
      <InputField
        type="tel"
        {...register('phone', {
          pattern: {
            value: PHONE_REG,
            message: '올바른 형식의 전화번호가 아닙니다.',
          },
        })}
      />
      {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
    </InforEach>
  );
}
