import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  background: #fff;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#959595',
})`
  flex: 1;
  font-size: 16px;
  color: #959595;
  font-family: Montserrat;
  margin-left: 10px;
`;
