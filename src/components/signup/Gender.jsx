import React from 'react';
import { InforEach, Label } from './SingupForm';
import styled from 'styled-components';
import { SignupConstant } from '../../utils/constant/SignupConstant';

const GENER_LIST = ['M', 'F'];

export default function Gender({ register }) {
  return (
    <InforEach>
      <Label>
        {SignupConstant.CATEGORY.gender}
        {SignupConstant.CATEGORY.optional}
      </Label>
      {GENER_LIST.map((gender) => (
        <RadioEach key={gender}>
          <span>{gender === 'M' ? '남성' : '여성'}</span>
          <input
            type="radio"
            name="gender"
            value={gender}
            {...register('gender')}
          />
        </RadioEach>
      ))}
    </InforEach>
  );
}

const RadioEach = styled.label`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  width: 60px;
  padding-bottom: 5px;
  justify-content: space-between;
`;
