import React from 'react';
import styled from 'styled-components';
import Star from '../../static/img/Star.png';

export default function LensItem({ products }) {
  return (
    <Items>
      {products &&
        products.map((products) => (
          <div>
            <IMG src={products.image1} alt="렌즈이미지" />
            <Title>{products.name}</Title>
            <Price>{products.sellPrice}</Price>
          </div>
        ))}
    </Items>
  );
}

const Items = styled.div`
  margin: 0 8vw 16px 8vw;
  display: grid;
  grid-template-columns: repeat(5, 220px);
  justify-content: space-between;
`;

const IMG = styled.img`
  weight: 220px;
  height: 220px;
  margin: 0;
`;

const Title = styled.p`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.016em;
  color: #23314a;
  margin-bottom: 8px;
`;

const SubTitle = styled.h3`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.016em;
  color: #23314a;
`;

const Price = styled.p`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.016em;
  color: #23314a;
  margin-top: 8px;
  margin-bottom: 16px;
`;

{
  /* <StyledLensItems>
        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
            <StyledStars>
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
            </StyledStars>
          </StyledLensInfo>
        </StyledLensItem>

        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
            <StyledStars>
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
            </StyledStars>
          </StyledLensInfo>
        </StyledLensItem>

        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
            <StyledStars>
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
            </StyledStars>
          </StyledLensInfo>
        </StyledLensItem>

        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
            <StyledStars>
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
            </StyledStars>
          </StyledLensInfo>
        </StyledLensItem>

        <StyledLensItem>
          <StyledLensImg
            src="https://lenssis.jp/data/item/0001616006/7Iqk7YWU652867iM65287Jq0_1month_7IOB7IS4.jpg"
            alt="렌즈 사진"
          />
          <StyledLensInfo>
            <StyledLensName>제품명제품명제품명</StyledLensName>
            <div>1,200 가격</div>
            <StyledStars>
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
              <img src={Star} alt="별점" />
            </StyledStars>
          </StyledLensInfo>
        </StyledLensItem>
      </StyledLensItems>
    </>
const StyledLensItems = styled.div`
  margin: 0 8vw 0 8vw;
  display: grid;
  grid-template-columns: 220px 220px 220px 220px 220px;
  justify-content: space-between;
`;

const StyledLensItem = styled.div`
  width: 220px;
  height: 330px;
  margin-top: 30px;
`;
const StyledStars = styled.div`
  justify: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledLensImg = styled.img`
  width: 220px;
  height: 220px;
`;

const StyledLensName = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`; */
}
