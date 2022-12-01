import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function DetailSection({ product, handleClick }) {
  return (
    <Container>
      <GnbLists>
        <GnbItem>
          <NavLink exact to="/itemDetail" className={'active'}>
            제품 상세설명
          </NavLink>
        </GnbItem>
        <GnbItem>
          <span onClick={handleClick}>리뷰(100)</span>
        </GnbItem>
      </GnbLists>
      <hr
        style={{
          width: '50%',
          backgroundColor: '#E9EAED',
        }}
      ></hr>
      <br />
      <br />
      <table
        border="1px solid black"
        width="800"
        height="500"
        align="center"
        bordercolor="#EDA0C7"
        border-collapse="collapse"
      >
        <tr align="center" bgcolor="pink">
          <td colSpan={2}>
            <span
              style={{
                color: 'white',
              }}
            >
              렌즈 상세
            </span>
          </td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            지름
          </td>
          <td>14.2mm</td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            그래픽 지름
          </td>
          <td>13.2mm</td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            베이스커브
          </td>
          <td>8.7</td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            판매도수
          </td>
          <td>0.00~8.00</td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            사용기간
          </td>
          <td>1개월용</td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            수분량
          </td>
          <td>45%</td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            소재
          </td>
          <td>실리콘 하이드로겔(한상자당 2장)</td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            포인트
          </td>
          <td>구매금액의 1%</td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            우송료
          </td>
          <td>500엔(4500엔 이상 무료배송)</td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: '#F5F6F8',
            }}
          >
            배송 안내
          </td>
          <td>영업일 기준 5~7일 이내 배송</td>
        </tr>
      </table>

      <img
        src="https://lenssis.jp/data/editor/2112/dc0adf8c18404aa304f7803e94ce8ab6_1640067355_7707.jpg"
        alt=""
      />
      <img
        src="https://lenssis.jp/data/editor/2103/b18665a8c73e3fb369ef3eedf797e6ad_1617166449_9869.jpg"
        alt=""
      />
    </Container>
  );
}

export default DetailSection;

const Container = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;

const GnbLists = styled.ul`
  list-style: none;
  height: 60px;
  margin: auto;
  padding: 0;
`;

const GnbItem = styled.li`
  display: inline-block;
  height: 60px;
  a {
    font-family: 'Noto Sans JP';
    display: block;
    position: relative;
    height: 60px;
    line-height: 65px;
    font-size: 1rem;
    font-weight: 500;
    padding: 0 0px;
    margin: 0 16px;
    text-decoration: none;
    color: black;
  }
  .active {
    border-bottom: solid 3px black;
  }
  span {
    cursor: pointer;
  }
`;
