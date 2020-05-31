import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Text from '~/components/Text';

export const Container = styled.SafeAreaView`
  background: #fff;
  height: 100%;
`;

export const Title = styled(Text)`
  font-size: ${(props) => (props.size ? `${props.size}px` : '14px')};
  color: ${(props) => (props.color ? props.color : '#232323')};
`;

export const Bold = styled(Text)`
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : '#232323')};
`;

export const EvolutionContainer = styled.View`
  border-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #293e56;
  border-bottom-start-radius: 50px;
  border-bottom-end-radius: 50px;

  padding: 90px 15px 5px;
`;

export const SliderContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  margin-top: 50px;
  margin-left: 60px;
`;

export const AgeContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ObjectiveContainer = styled.View`
  padding: 30px 15px;
`;

export const AnnualRecipe = styled.View`
  align-items: center;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const Accumulated = styled.View`
  flex-direction: row;
  justify-content: space-evenly;

  margin-bottom: 80px;
`;

export const AccumulatedInfo = styled.View`
  align-items: center;
`;

export const DetailButton = styled(TouchableOpacity)`
  background: #ffb802;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;
