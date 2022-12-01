import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useLogout } from '../api/loginApi';
import { useGetUserInfor } from '../api/userApi';
import { setLogIn } from '../store/loginInfor';
import Button from '../components/login/Button';

export default function MyPage() {
  const isLogin = useSelector((state) => state.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error, data } = useGetUserInfor();
  const { refetch } = useLogout();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, []);

  return (
    <PageWrapper>
      <Title>My Page</Title>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>{error.message}</div>
      ) : (
        <>
          '로그인에 성공하셨습니다.'
          {console.log(data.data.data)}
          <Buttons>
            <Button
              text="로그아웃"
              onClick={() => {
                const { data } = refetch();
                console.log(data);
                dispatch(setLogIn({ login: false }));
                navigate('/');
              }}
            ></Button>
            <Button text="회원 정보 수정"></Button>
          </Buttons>
        </>
      )}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 700px;
  border: 1px solid black;
  margin: 20px auto;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

const PageContent = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;
