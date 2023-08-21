import { styled } from 'styled-components';

export const Label = styled.label`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
`;

export const Input = styled.input`
  margin-top: 12px;
  margin-bottom: 20px;
  font-size: 20px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  &::placeholder {
    color: #0d2146;
    font-style: italic;
  }
`;
