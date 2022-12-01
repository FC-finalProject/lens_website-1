import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ShoppingBasketModal from '../../modals/ShoppingBasketModal';
import WrapDetailList from './WrapDetailList';

function WrapDetail({ product, handleClick, id }) {
  const [openModal, setOpenModal] = useState(false);
  const [openDiv, setOpenDiv] = useState(false);
  const [count, setCount] = useState(0);

  const [data, setData] = useState({
    id: id,
    name: product.nameKor,
    price: product.sellPrice,
  });
  const dataString = JSON.stringify(data);
  window.localStorage.setItem('itemDetail', dataString);

  const [free, setFree] = useState([]);
  const freeString = JSON.stringify(free);
  window.localStorage.setItem('fre', freeString);
  const [countList, setCountList] = useState([1]);

  function handleCart(e) {
    setFree([...free, e.target.innerText]);
    window.localStorage.setItem('fre', free);
    setOpenDiv(true);
    setCount(count + 1);
    function onAddDetailDiv() {
      let countArr = [...countList];
      let counter = countArr.slice(-1)[0];
      counter += 1;
      countArr.push(counter);
      setCountList(countArr);
    }
    return onAddDetailDiv;
  }
  console.log(data);

  const ITEM = JSON.parse(window.localStorage.getItem('itemDetail'));
  const ITEMfre = JSON.parse(window.localStorage.getItem('fre'));
  console.log(ITEM);
  console.log(ITEMfre);
  return (
    <Container>
      <form>
        <p className="p1">{product.nameKor}</p>
        <br />
        <Suggestionbtn type="button">추천</Suggestionbtn> &nbsp;
        <Bestbtn type="button">인기</Bestbtn>
        <br />
        <br />
        <span className="price">가격</span>&nbsp;&nbsp;{' '}
        <span className="円">{product.sellPrice.toLocaleString()}円</span>
        <hr />
        <br />
        <Commonspan>사용일 </Commonspan> &nbsp;&nbsp; <strong>1year</strong>
        <br />
        <br />
        <Commonspan>지름 </Commonspan> &nbsp;&nbsp; <strong>18.77mm</strong>
        <br />
        <br />
        <hr />
        <br />
        <div>
          <Commonspan>그래픽 지름&nbsp;&nbsp;&nbsp;</Commonspan>
          <Graphicdiameterbtn type="button">
            {product.spec.graphicDiameter}
          </Graphicdiameterbtn>
        </div>
        <br />
        <div>
          <Commonspan>
            사용 기간&nbsp;&nbsp;&nbsp;
            <Graphicdiameterbtn type="button">
              {product.spec.duration}
            </Graphicdiameterbtn>
          </Commonspan>
        </div>
        <br />
        <div>
          <Commonspan>
            색상&nbsp;&nbsp;&nbsp;
            <Brownbtn type="button">브라운</Brownbtn>
            <Bluebtn type="button">블루</Bluebtn>
            <Chocobtn type="button">초코</Chocobtn>
            <Graybtn type="button">그레이</Graybtn>
          </Commonspan>
        </div>
        <br />
        <div>
          <Commonspan>
            빈도&nbsp;&nbsp;
            {product.spec.frequency.split(',').map((frequency) => (
              <Frequencybtn
                type="button"
                key={frequency.id}
                onClick={(e) => handleCart(e)}
              >
                {frequency}
              </Frequencybtn>
            ))}
          </Commonspan>

          {openDiv && (
            <WrapDetailList fre={ITEMfre} item={ITEM} countList={countList} />
          )}
        </div>
        <ResultPrice>
          <div className="TotalPriceDiv">
            <span className="TotalPrice">총 금액</span>
          </div>
          <div className="PriceResultDiv">
            <span className="PriceResult">
              ¥{Number(product.sellPrice) * count}
            </span>
          </div>
        </ResultPrice>
        <br />
        <br />
        <Orderbtn type="button">주문하기</Orderbtn>&nbsp;&nbsp;
        <Keepbtn type="button" onClick={() => setOpenModal(true)}>
          장바구니
        </Keepbtn>
        <ShoppingBasketModal
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
        &nbsp;&nbsp;
        <Keepbtn type="button" onClick={handleClick}>
          좋아요♡
        </Keepbtn>
      </form>
    </Container>
  );
}

export default WrapDetail;

const Container = styled.div`
  width: 40%;
  height: 100%;
  float: right;
  font-style: normal;
  .p1 {
    font-weight: 400;
    font-size: 30px;
    line-height: 48px;
    letter-spacing: -0.016em;
  }
  .price {
    color: red;
    font-weight: 300;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: -0.016em;
  }
  .円 {
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: -0.016em;
    color: #171717;
  }
`;
const Commonspan = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;

  text-align: center;
  letter-spacing: -0.016em;

  color: #767676;
`;

const Suggestionbtn = styled.button`
  width: 59px;
  height: 24px;
  font-style: normal;
  font-weight: 1500;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.016em;

  color: #23314a;
  background-color: rgba(230, 156, 196, 1);
`;
const Bestbtn = styled(Suggestionbtn)`
  background-color: rgba(249, 176, 170, 1);
`;

const Graphicdiameterbtn = styled.button`
  width: 86px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #d3d6db;
  border-radius: 4px;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;

const ResultPrice = styled.div`
  display: border-box;
  border: 1px solid black;
  width: 557px;
  height: 78px;
  left: -0.04px;
  margin-top: 30px;

  background: #f9f9f9;
  border: 0.4px solid #c5c5c5;
  border-radius: 4px;
  .TotalPrice {
    display: flex;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.016em;
    margin-top: 25px;
    margin-left: 10px;
  }
  .PriceResult {
    display: flex;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: -0.016em;
    margin-top: 18px;
    margin-right: 10px;
  }
  .TotalPriceDiv {
    display: flex;
    float: left;
    justify-content: center;
  }
  .PriceResultDiv {
    display: flex;
    float: right;
    justify-content: center;
    flex-direction: row;
  }
`;

const Orderbtn = styled.button`
  width: 150px;
  height: 60px;
  left: 0px;
  top: 0px;
  color: white;
  cursor: pointer;
  background: #eb5072;
  border-radius: 4px;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;
const Keepbtn = styled(Orderbtn)`
  background-color: black;
`;
const Brownbtn = styled.button`
  width: 86px;
  height: 42px;
  border: 1px solid #d3d6db;
  color: white;
  cursor: pointer;
  background: #483a2e;
  border-radius: 4px;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;
const Bluebtn = styled(Brownbtn)`
  background-color: #364c75;
`;
const Chocobtn = styled(Brownbtn)`
  background-color: #5f4935;
`;
const Graybtn = styled(Brownbtn)`
  background-color: #797c82;
`;
const Frequencybtn = styled(Graphicdiameterbtn)`
  margin: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  text-align: center;
  letter-spacing: -0.016em;
  &:active {
    background-color: gray;
  }
  &:focus {
    background-color: gray;
  }
`;
