import React, { useState } from 'react';
import styled from 'styled-components';
import { useCheckValidity } from '../../api/signupApi';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import { EMAIL_REG } from '../../utils/reg';
import Popup from '../common/Popup';
import { InforEach, Label, InputField, RepetitionCheckBtn } from './SingupForm';

export default function Email({ register, watch, setError, clearErrors }) {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const email = watch('email');
  const { refetch } = useCheckValidity('email', email);

  const getResult = async () => {
    const { data } = await refetch();
    return !data.data.data.exists;
  };
  return (
    <>
      <InforEach>
        <Label>{SignupConstant.CATEGORY.email}</Label>
        <InputBox>
          <InputField
            {...register('email', {
              required: {
                value: true,
                message: SignupConstant.ERROR_MESSAGE.no_email,
              },
              pattern: {
                value: EMAIL_REG,
                message: SignupConstant.ERROR_MESSAGE.email_wrong_form,
              },
              valdiate: () =>
                duplicateCheck ||
                SignupConstant.ERROR_MESSAGE.email_duplicate_check,
            })}
          />
          <RepetitionCheckBtn
            onClick={async () => {
              if (!EMAIL_REG.test(email)) {
                setMessage(SignupConstant.ERROR_MESSAGE.email_wrong_form);
              } else {
                const exists = getResult();
                if (!exists) {
                  setMessage(SignupConstant.ERROR_MESSAGE.email_duplicate);
                  setError('email', { type: 'custom' });
                  setDuplicateCheck(false);
                } else {
                  setMessage(SignupConstant.MESSAGE.email_usable);
                  clearErrors('email');
                  setDuplicateCheck(true);
                }
              }
              setShowPopup(true);
            }}
          >
            {SignupConstant.CATEGORY.duplicate_check}
          </RepetitionCheckBtn>
        </InputBox>
      </InforEach>
      {showPopup && <Popup message={message} show={setShowPopup} />}
    </>
  );
}

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
