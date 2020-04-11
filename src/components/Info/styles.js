import styled from 'styled-components';

export const Container = styled.div`
  height: 30vh;
  width: 100%;
  margin-top: 30px;
`;

export const InfoContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column; 
  }

`

export const Picture = styled.div`
  background-image: url(${props => props.url}); 
  height: 150px;
  width: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 15px;
  border: 5px solid ${props => props.theme.colors.secundary};
  @media (max-width: 600px) {
    margin: 0px 10px;
  }
`;

export const TextBox = styled.div`
  line-height: 30px;
  padding: 0 10px;
  @media (max-width: 600px) {
    margin: 30px 10px;
  }
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  text-decoration: underline;
`;
