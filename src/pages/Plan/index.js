import React from 'react';
import { StatusBar, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

import slider from '~/assets/images/slider.png';
import rent from '~/assets/images/rent.png';
import cashBack from '~/assets/images/cashBack.png';
import application from '~/assets/images/application.png';

import {
  Container,
  Title,
  Bold,
  EvolutionContainer,
  SliderContainer,
  AgeContainer,
  ObjectiveContainer,
  AnnualRecipe,
  Accumulated,
  AccumulatedInfo,
  DetailButton,
} from './styles';

export default function Plan() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <EvolutionContainer>
          <Title>
            <Bold>
              EVOLUÇÃO <Icon name="help-outline" color="#FFB802" size={14} />
            </Bold>
          </Title>

          <SliderContainer>
            <Slider
              style={{
                width: 25,
                borderRadius: 10,
                transform: [{ rotate: '-90deg' }],
              }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFB802"
              maximumTrackTintColor="#FFB802"
              value={1}
              thumbTintColor="transparent"
            />

            <Slider
              style={{
                width: 45,
                borderRadius: 10,
                marginBottom: 10,
                marginLeft: -15,
                transform: [{ rotate: '-90deg' }],
              }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFB802"
              maximumTrackTintColor="#FFB802"
              value={1}
              thumbTintColor="transparent"
            />

            <Slider
              style={{
                width: 65,
                borderRadius: 10,
                marginBottom: 20,
                marginLeft: -30,
                transform: [{ rotate: '-90deg' }],
              }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFB802"
              maximumTrackTintColor="#FFB802"
              value={1}
              thumbTintColor="transparent"
            />

            <Slider
              style={{
                width: 85,
                borderRadius: 10,
                marginBottom: 30,
                marginLeft: -45,
                transform: [{ rotate: '-90deg' }],
              }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFB802"
              maximumTrackTintColor="#C4C4C4"
              value={0.85}
              thumbTintColor="transparent"
            />

            <Slider
              style={{
                width: 105,
                borderRadius: 10,
                marginBottom: 40,
                marginLeft: -60,
                transform: [{ rotate: '-90deg' }],
              }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#C4C4C4"
              maximumTrackTintColor="#C4C4C4"
              value={0}
              thumbTintColor="transparent"
            />

            <Slider
              style={{
                width: 125,
                borderRadius: 10,
                marginBottom: 50,
                marginLeft: -75,
                transform: [{ rotate: '-90deg' }],
              }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#C4C4C4"
              maximumTrackTintColor="#C4C4C4"
              value={0}
              thumbTintColor="transparent"
            />

            <Slider
              style={{
                width: 145,
                borderRadius: 10,
                marginBottom: 60,
                marginLeft: -90,
                transform: [{ rotate: '-90deg' }],
              }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#C4C4C4"
              maximumTrackTintColor="#C4C4C4"
              value={0}
              thumbTintColor="transparent"
            />
          </SliderContainer>
          <AgeContainer>
            <Title size={12}>2020</Title>
            <Title size={12}>2029</Title>
          </AgeContainer>
        </EvolutionContainer>
        <ObjectiveContainer>
          <Title>
            <Bold>OBJETIVO</Bold>
          </Title>

          <AnnualRecipe>
            <Title size={12} style={{ marginBottom: 5 }}>
              <Bold>Preciso juntar esse ano:</Bold>
            </Title>
            <Title size={12} style={{ marginBottom: 5 }}>
              <Bold color="#FFB802">R$ 5.000,00</Bold>
            </Title>
            <Title size={10} color="#959595">
              Progresso <Bold color="#959595">58%</Bold>
            </Title>
          </AnnualRecipe>

          <Title size={12} style={{ alignSelf: 'center', marginBottom: 25 }}>
            <Bold>Quanto eu acumulei:</Bold>
          </Title>
          <Accumulated>
            <AccumulatedInfo>
              <Image source={rent} style={{ marginBottom: 10 }} />
              <Title size={12} color="#959595">
                Rendimento
              </Title>
              <Title size={12}>
                <Bold>R$ 420,00</Bold>
              </Title>
            </AccumulatedInfo>

            <AccumulatedInfo>
              <Image source={application} style={{ marginBottom: 5 }} />
              <Title size={12} color="#959595">
                Aplicação
              </Title>
              <Title size={12}>
                <Bold>R$ 1.200,00</Bold>
              </Title>
            </AccumulatedInfo>

            <AccumulatedInfo>
              <Image source={cashBack} style={{ marginBottom: 5 }} />
              <Title size={12} color="#959595">
                Cash Back
              </Title>
              <Title size={12}>
                <Bold>R$ 100,00</Bold>
              </Title>
            </AccumulatedInfo>
          </Accumulated>

          <Slider
            style={{
              width: '100%',
              borderRadius: 10,
            }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFB802"
            maximumTrackTintColor="#293E56"
            thumbImage={slider}
            thumbTintColor="#FFB802"
            value={0.3}
          />

          <Title size={12} color="#959595" style={{ alignSelf: 'center' }}>
            Faltam 48 meses
          </Title>

          <DetailButton>
            <Title size={12}>
              <Bold color="#fff" style={{ textAlign: 'center' }}>
                Ver Detalhes
              </Bold>
            </Title>
          </DetailButton>
        </ObjectiveContainer>
      </Container>
    </>
  );
}
