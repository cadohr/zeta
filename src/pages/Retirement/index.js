import React from 'react';
import { View, Image } from 'react-native';

import rentability from '~/assets/images/rentability.png';

import {
  Container,
  Header,
  HeaderContainer,
  BalanceContainer,
  Balance,
  Profitability,
  Title,
  Bold,
  InvestimentInfoContainer,
  Profile,
  Taxation,
  Receipt,
} from './styles';

export default function Retirement() {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <BalanceContainer>
            <Balance>
              <Title>Saldo Atual</Title>
              <Title size={18}>
                <Bold>R$ 6.418,93</Bold>
              </Title>
            </Balance>
            <Profitability>
              <Title>Rentabilidade</Title>
              <Title size={18}>
                <Bold>R$ 169,14</Bold>
              </Title>
            </Profitability>
          </BalanceContainer>

          <InvestimentInfoContainer>
            <Profile>
              <Title size={10}>Perfil de {'\n'} Investimento</Title>
              <Title size={10}>
                <Bold>Renda Variavel</Bold>
              </Title>
            </Profile>
            <Taxation>
              <Title size={10}>Tipo de Tributação</Title>
              <Title size={10}>
                <Bold>Tabela {'\n'}Regressiva</Bold>
              </Title>
            </Taxation>

            <Receipt>
              <Title size={10}>Recebimento {'\n'} da Renda</Title>
              <Title size={10}>
                <Bold>60 Anos</Bold>
              </Title>
            </Receipt>
          </InvestimentInfoContainer>
        </HeaderContainer>
      </Header>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -55,
        }}
      >
        <Image source={rentability} style={{ transform: [{ scale: 0.8 }] }} />
      </View>
    </Container>
  );
}
