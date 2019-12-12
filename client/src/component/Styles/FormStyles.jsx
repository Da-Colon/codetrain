import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: solid;
  padding: 32px;
  margin: 16px;
  box-shadow: 5px 10px 5px lightgrey;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-weight: 600;
  font-size: 200%;
`;

export const Input = styled.input`
  margin: 8px;
  padding: 8px;
  font-size: 100%;
`;
export const Button = styled.button`
  padding: 8px;
  font-weight: 500;
  background-color: lightblue;
  font-size: 150%;
  margin: 16px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 300%;
  letter-spacing: ;
`;