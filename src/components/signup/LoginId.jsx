import React, { useState } from 'react';
import { useCheckValidity } from '../../api/signupApi';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import Popup from '../common/Popup';
import { InputBox } from './Email';
import { InforEach, Label, InputField, RepetitionCheckBtn } from './SingupForm';

export default function LoginId({ register, watch, setError, clearErrors }) {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const { refetch } = useCheckValidity('loginId', watch('loginId'));
  return (
    <>
      <InforEach>
        <Label>{SignupConstant.CATEGORY.id}</Label>
        <InputBox>
          <InputField
            {...register('loginId', {
              required: true,
              minLength: {
                value: 8,
                message: SignupConstant.ERROR_MESSAGE.id_wrong_number,
              },
            })}
          />
          <RepetitionCheckBtn
            onClick={async () => {
              const { data } = await refetch();
              if (data.data.data.exists) {
                setMessage(SignupConstant.ERROR_MESSAGE.id_ducplicate);
                setError('loginId', { type: 'custom' });
              } else {
                setMessage(SignupConstant.MESSAGE.id_usable);
                clearErrors('loginId');
              }
              setShowPopup(true);
            }}
          >
            {SignupConstant.CATEGORY.duplicate_check}
          </RepetitionCheckBtn>
        </InputBox>
      </InforEach>
      {showPopup && <Popup show={setShowPopup} message={message} />}
    </>
  );
}
