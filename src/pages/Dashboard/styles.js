import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import Text from '~/components/Text';

export const Header = styled.SafeAreaView`
  background: #355070;
  height: 35%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 35px 15px;
`;

export const Profile = styled.View`
  flex: 1;
`;

export const Name = styled(Text)``;

export const PlanName = styled(Text)`
  font-size: 10px;
`;

export const Notifications = styled.View``;

export const Bold = styled(Text)`
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : '#fff')};
`;

export const Retirement = styled.View`
  border-style: solid;
  border-top-width: 1px;
  border-top-color: #293e56;
  border-top-start-radius: 15px;
  border-top-end-radius: 15px;

  padding: 15px 15px;
`;

export const RetirementTitle = styled(Text)`
  font-size: 10px;
  font-weight: bold;
  text-align: center;

  margin-bottom: 30px;
`;

export const RetirementObjective = styled(Text)`
  font-size: 10px;
  margin-bottom: 10px;
`;

export const RetirementPlan = styled(Text)`
  font-size: 10px;
`;

export const RetirementPlanInfo = styled(Text)`
  font-size: 10px;
  font-weight: bold;
`;

export const RetirementTax = styled(Text)`
  font-size: 10px;
`;

export const RetirementInfo = styled(TouchableOpacity)`
  align-self: center;
`;

export const Container = styled.View``;

export const Plans = styled.View`
  padding: 35px 15px;
`;

export const PlansTitle = styled(Text)`
  font-weight: bold;
  font-size: 12px;
  color: #232323;
`;

export const PlanContainer = styled(TouchableOpacity)`
  background: #eaeaea;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 10px 20px 30px;
  margin-top: 15px;
`;

export const PlanContent = styled.View`
  flex: 1;
  margin-left: 40px;
`;

export const PlanTitle = styled(Text)`
  font-size: 12px;
  color: #232323;
  margin-bottom: 5px;
`;

export const PlanDescription = styled(Text)`
  font-size: 10px;
  color: #959595;
`;

export const PlanValueEstimated = styled(Text)`
  font-size: 10px;
  color: #959595;
`;

export const PlanDate = styled(Text)`
  font-size: 10px;
  color: #959595;
`;

export const AddPlan = styled(TouchableOpacity)`
  align-self: center;
  margin-top: 25px;
`;
