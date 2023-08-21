import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: rgba(13, 33, 70, 0.7);
  color: rgba(13, 33, 70, 0.8);
  width: 1200px;
  margin: 50px auto 0;
  border-radius: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  padding: 18px 6px 18px 18px;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const SearchSection = styled.section`
  width: 600px;
  padding: 30px;
`;

export const ContactsSection = styled.section`
  width: 100%;
  padding: 10px 30px;
`;

export const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin: 20px 0 10px;
`;
