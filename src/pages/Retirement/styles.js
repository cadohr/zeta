import styled from 'styled-components/native';

import Text from '~/components/Text';

export const Container = styled.View`
  background: #fff;
`;

export const Header = styled.SafeAreaView`
  background: #355070;
  height: 28%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const HeaderContainer = styled.View``;

export const BalanceContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  padding: 50px 15px 10px;

  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #293e56;
  border-bottom-start-radius: 100px;
  border-bottom-end-radius: 100px;
`;

export const Balance = styled.View``;

export const Profitability = styled.View``;

export const Title = styled(Text)`
  font-size: ${(props) => (props.size ? `${props.size}px` : '14px')};
  text-align: center;
  margin-bottom: 5px;
`;

export const Bold = styled(Text)`
  font-weight: bold;
`;

export const InvestimentInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;

  padding: 25px 35px 0;
`;

export const Profile = styled.View``;
export const Taxation = styled.View``;
export const Receipt = styled.View``;
