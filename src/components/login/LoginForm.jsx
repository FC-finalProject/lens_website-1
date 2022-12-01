import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import LoginConstant from '../../utils/constant/LoginConstant';
import Button from './Button';
import deleteIcon from '../../static/img/VectordeleteIcon.png';
import { sendLoginInfo } from '../../api/loginApi';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Popup from '../common/Popup';
import { ErrorMessage } from '../signup/SingupForm';

export default function LoginForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(getValues());
    try {
      await sendLoginInfo(data);
      navigate('/');
    } catch {
      setShowPopup(true);
      setMessage(LoginConstant.ERROR_MESSAGE.fail);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <label>{LoginConstant.CATEGORY.id}</label>
        <InputField
          {...register('loginId', {
            required: {
              value: true,
              message: LoginConstant.ERROR_MESSAGE.no_id,
            },
          })}
        />
        <DeleteBtn onClick={() => setValue('loginId', '')} />
      </InputBox>
      <InputBox>
        <label>{LoginConstant.CATEGORY.password}</label>
        <InputField
          type="password"
          {...register('password', {
            required: {
              value: true,
              message: LoginConstant.ERROR_MESSAGE.no_password,
            },
          })}
        />
        <DeleteBtn
          style={{ transform: 'translate(240px,25px)' }}
          onClick={() => setValue('password', '')}
        />
      </InputBox>
      {errors.loginId && <ErrorMessage>{errors.loginId.message}</ErrorMessage>}
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      <Button text="로그인" />
      {showPopup && <Popup message={message} show={setShowPopup} />}
    </form>
  );
}

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  width: 322px;
  margin-bottom: 30px;
  font-size: 14px;
  color: #606060;
`;
const InputField = styled.input`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 8px;
  font-size: 18px;
  margin-top: 10px;
  width: 90%;

  &:focus {
    outline: none;
    border-bottom: 2px solid #23314a;
  }
`;

const DeleteBtn = styled.img.attrs({ src: deleteIcon, alt: 'delete Icon' })`
  width: 16.67px;
  height: 16.67px;
  position: absolute;
  transform: translate(280px, 25px);
  cursor: pointer;
`;
