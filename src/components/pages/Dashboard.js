import React from 'react';
import { useTheme } from 'styled-components';
import Atoms from '../atoms';
import Molecules from '../molecules';
import Organisms from '../organisms';
import Template from '../templates/Template';

const options = [
  {
    id: 1,
    name: 'roas',
    unavailable: false
  },
  {
    id: 2,
    name: '광고비',
    unavailable: false
  },
  {
    id: 3,
    name: '노출수',
    unavailable: false
  },
  {
    id: 4,
    name: '클릭수',
    unavailable: false
  },
  {
    id: 5,
    name: '전환 수',
    unavailable: true
  },
  {
    id: 6,
    name: '매출',
    unavailable: false
  }
];
export default function Dashboard() {
  const theme = useTheme();

  return (
    <Template>
      <Atoms.Wrapper padding='25px 40px'>
        <Atoms.Head26>대시보드</Atoms.Head26>
        <Atoms.Wrapper
          padding='40px'
          backgroundColor='#fff'
          borderRadius='20px'
        >
          <Atoms.Wrapper margin='0 0 40px 0' display='flex' gap='10px'>
            <Organisms.Select
              label='ROAS'
              data={options}
              triggerOptions={{
                style: {
                  width: '123px'
                },
                prefix: <Atoms.Circle backgroundColor={theme.colors.graph_01} />
              }}
            />
            <Organisms.Select
              label='클릭수'
              data={options}
              triggerOptions={{
                style: {
                  width: '123px'
                },
                prefix: <Atoms.Circle backgroundColor={theme.colors.graph_02} />
              }}
            />
          </Atoms.Wrapper>
          <Molecules.LineGraph />
        </Atoms.Wrapper>
      </Atoms.Wrapper>
    </Template>
  );
}
