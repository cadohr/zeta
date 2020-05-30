import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Text from '~/components/Text';

export const Container = styled(RectButton)`
  height: 46px;
  background: #ffb802;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
