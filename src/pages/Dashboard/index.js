import React from 'react';
import { Image } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

import airplane from '~/assets/images/airplane.png';
import books from '~/assets/images/books.png';
import sofa from '~/assets/images/sofa.png';

import {
  Header,
  HeaderContainer,
  Container,
  Bold,
  Profile,
  Name,
  PlanName,
  Notifications,
  Retirement,
  RetirementTitle,
  RetirementObjective,
  RetirementPlan,
  RetirementPlanInfo,
  RetirementTax,
  RetirementInfo,
  Plans,
  PlansTitle,
  PlanContainer,
  PlanContent,
  PlanTitle,
  PlanDescription,
  PlanValueEstimated,
  PlanDate,
  AddPlan,
} from './styles';

export default function Dashboard({ navigation }) {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Profile>
            <Name>Olá, Luisa Souza</Name>
            <PlanName>Plano Inovar</PlanName>
          </Profile>
          <Notifications>
            <Icon name="notifications-none" size={28} color="#fff" />
          </Notifications>
        </HeaderContainer>
        <Retirement>
          <RetirementTitle>APOSENTADORIA</RetirementTitle>

          <RetirementObjective>
            <Bold>Objetivo</Bold> R$ 550.815,32
          </RetirementObjective>
          <Slider
            style={{
              width: '100%',
              height: 4,
              borderRadius: 10,
              marginBottom: 20,
            }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFB802"
            maximumTrackTintColor="#293E56"
            value={0.3}
            thumbTintColor="transparent"
          />

          <RetirementPlan>Plano</RetirementPlan>
          <RetirementPlanInfo>Plano Digital Zeta</RetirementPlanInfo>
          <RetirementTax>
            Taxa de corretagem <Bold>0%</Bold>
            {'  '}
            <Icon name="help-outline" color="#FFB802" size={10} />
          </RetirementTax>

          <RetirementInfo
            onPress={() =>
              navigation.navigate('Retirement', {
                name: 'Meu Plano de Aposentadoria',
              })
            }
          >
            <Icon name="keyboard-arrow-down" color="#FFB802" size={20} />
          </RetirementInfo>
        </Retirement>
      </Header>
      <Container>
        <Plans>
          <PlansTitle>Meus planos</PlansTitle>
          <PlanContainer
            onPress={() =>
              navigation.navigate('Plan', { name: 'Projeto Harvard' })
            }
          >
            {/* <Icon name="school" color="#FFB802" size={48} /> */}
            <Image source={books} />
            <PlanContent>
              <PlanTitle>Projeto Harvard</PlanTitle>
              <PlanDescription>MBA Finanças Comportamentais</PlanDescription>
              <PlanValueEstimated>
                Investimento estimado: <Bold color="#959595">R$ 30.000,00</Bold>
              </PlanValueEstimated>
              <PlanDate>
                Data: <Bold color="#959595">Janeiro/2029</Bold>
              </PlanDate>
            </PlanContent>
            <Icon name="keyboard-arrow-right" color="#959595" size={20} />
          </PlanContainer>

          <PlanContainer
            onPress={() =>
              navigation.navigate('Plan', { name: 'Viagem dos sonhos' })
            }
          >
            {/* <Icon name="airplanemode-active" color="#FFB802" size={48} /> */}
            <Image source={airplane} />
            <PlanContent>
              <PlanTitle>Viagem dos sonhos</PlanTitle>
              <PlanDescription>Viagem para Cancún</PlanDescription>
              <PlanValueEstimated>
                Investimento estimado: <Bold color="#959595">R$ 10.000,00</Bold>
              </PlanValueEstimated>
              <PlanDate>
                Data: <Bold color="#959595">Janeiro/2027</Bold>
              </PlanDate>
            </PlanContent>
            <Icon name="keyboard-arrow-right" color="#959595" size={20} />
          </PlanContainer>

          <PlanContainer
            onPress={() =>
              navigation.navigate('Plan', { name: 'Trabalho Mode OFF' })
            }
          >
            {/* <Icon name="mood" color="#FFB802" size={48} /> */}
            <Image source={sofa} />
            <PlanContent>
              <PlanTitle>Trabalho Mode OFF</PlanTitle>
              <PlanDescription>Periodo Sabático aos 45 anos</PlanDescription>
              <PlanValueEstimated>
                Valor do benefício: <Bold color="#959595">R$ 4.000,00</Bold>
              </PlanValueEstimated>
              <PlanDate>
                Data: <Bold color="#959595">Janeiro/2040</Bold>
              </PlanDate>
            </PlanContent>
            <Icon name="keyboard-arrow-right" color="#959595" size={20} />
          </PlanContainer>

          <AddPlan>
            <Icon name="add-circle-outline" color="#959595" size={28} />
          </AddPlan>
        </Plans>
      </Container>
    </>
  );
}
