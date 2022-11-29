import React from 'react';
import { InforEach, Label, InputField, ErrorMessage } from './SingupForm';
import { PW_REG } from '../../utils/reg';
import { SignupConstant } from '../../utils/constant/SignupConstant';

export default function Password({
  register,
  errors,
  getValues,
  setError,
  clearErrors,
}) {
  return (
    <>
      <InforEach>
        <Label>{SignupConstant.CATEGORY.password} </Label>
        <InputField
          type="password"
          {...register('password', {
            required: true,
            maxLength: 25,
            pattern: {
              value: PW_REG,
              message: SignupConstant.ERROR_MESSAGE.password_wrong_form,
            },
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </InforEach>
      <InforEach>
        <Label>{SignupConstant.CATEGORY.passwordCheck}</Label>
        <InputField
          type="password"
          {...register('passwordCheck', {
            required: true,
            maxLength: 25,
          })}
          onChange={(e) => {
            const password = getValues('password');
            if (e.target.value !== password) {
              setError('passwordCheck', {
                type: 'custom',
                message: SignupConstant.ERROR_MESSAGE.password_not_match,
              });
            } else {
              clearErrors('passwordCheck');
            }
          }}
        ></InputField>
        {errors.passwordCheck && (
          <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>
        )}
      </InforEach>
    </>
  );
}
