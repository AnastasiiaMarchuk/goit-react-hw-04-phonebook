import { styled } from 'styled-components';

export const Title = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 8px;
`;
export const Input = styled.input`
  margin-bottom: 8px;
  margin-top: 4px;
  font-size: 20px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  &::placeholder {
    color: #0d2146;
    font-style: italic;
  }
`;

export const Error = styled.span`
  font-size: 16px;
  color: #dbd7d2;
  font-style: italic;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #475a8a;
  font-size: 24px;
  border-radius: 5px;
  color: #ffffff;
  margin-top: 24px;
  cursor: pointer;
  height: 40px;
  border: none;
  &:hover {
    box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 1);
  }
`;
