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
  const email = watch('email');
  const { refetch } = useCheckValidity('email', email);

  return (
    <>
      <InforEach>
        <Label>{SignupConstant.CATEGORY.email}</Label>
        <InputBox>
          <InputField
            {...register('email', {
              required: true,
              pattern: EMAIL_REG,
            })}
          />
          <RepetitionCheckBtn
            onClick={async () => {
              if (!EMAIL_REG.test(email)) {
                setMessage(SignupConstant.ERROR_MESSAGE.email_wrong_form);
              } else {
                const { data } = await refetch();
                if (data.data.data.exists) {
                  setMessage(SignupConstant.ERROR_MESSAGE.email_duplicate);
                  console.log(message);
                  setError('email', { type: 'custom' });
                } else {
                  setMessage(SignupConstant.MESSAGE.email_usable);
                  clearErrors('email');
                  console.log(message);
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
