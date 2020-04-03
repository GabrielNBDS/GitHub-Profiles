import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  width: 100%;
  height: 50px;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  padding: 10px 30px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 3px solid ${props => props.theme.colors.secundary};
`;

export const Button = styled.button`
  height: 50px;
  padding: 10px 30px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 0;
  color: #fff;
  background-color: ${props => props.theme.colors.primary}
`;
