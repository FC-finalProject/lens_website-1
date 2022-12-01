import React, { useState } from 'react';
import { useCheckValidity } from '../../api/signupApi';
import { SignupConstant } from '../../utils/constant/SignupConstant';
import Popup from '../common/Popup';
import { InputBox } from './Email';
import { InforEach, Label, InputField, RepetitionCheckBtn } from './SingupForm';

export default function LoginId({ register, watch, setError, clearErrors }) {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const loginId = watch('loginId');
  const { refetch } = useCheckValidity('loginId', loginId);

  const getResult = async () => {
    const { data } = await refetch();
    return !data.data.data.exists;
  };
  return (
    <>
      <InforEach>
        <Label>{SignupConstant.CATEGORY.id}</Label>
        <InputBox>
          <InputField
            {...register('loginId', {
              required: {
                value: true,
                message: SignupConstant.ERROR_MESSAGE.no_id,
              },
              minLength: {
                value: 8,
                message: SignupConstant.ERROR_MESSAGE.id_wrong_number,
              },
              validate: () =>
                duplicateCheck ||
                SignupConstant.ERROR_MESSAGE.id_duplicate_check,
            })}
          />
          <RepetitionCheckBtn
            onClick={async () => {
              if (loginId.length < 8) {
                setMessage(SignupConstant.ERROR_MESSAGE.id_wrong_number);
              } else {
                const exists = await getResult();
                if (!exists) {
                  setMessage(SignupConstant.ERROR_MESSAGE.id_ducplicate);
                  setError('loginId', { type: 'custom' });
                  setDuplicateCheck(false);
                } else {
                  setMessage(SignupConstant.MESSAGE.id_usable);
                  clearErrors('loginId');
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
      {showPopup && <Popup show={setShowPopup} message={message} />}
    </>
  );
}
