import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Text from '~/components/Text';

export const Background = styled(LinearGradient).attrs({
  colors: ['#293E56', '#476A94'],
})`
  height: 60%;
`;

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 15px;
`;

export const Form = styled.View`
  background: #eaeaea;
  border-radius: 10px;
  margin-top: -50px;
  padding: 35px 15px 35px;
`;

export const FormLabel = styled(Text)`
  color: #959595;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)`
  margin: 5px 0 15px;
`;

export const ForgotPasswordButton = styled(Text)`
  color: #232323;
  text-align: center;
`;
