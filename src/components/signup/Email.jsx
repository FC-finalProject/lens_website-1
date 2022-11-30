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
  const { refetch } = useCheckValidity('email', watch('email'));

  return (
    <>
      <InforEach>
        <Label>{SignupConstant.CATEGORY.email}</Label>
        <InputBox>
          <InputField
            {...register('email', {
              required: true,
              pattern: {
                value: EMAIL_REG,
                message: SignupConstant.ERROR_MESSAGE.email_wrong_form,
              },
            })}
          />
          <RepetitionCheckBtn
            onClick={async () => {
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
