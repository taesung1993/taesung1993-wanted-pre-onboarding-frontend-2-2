import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Atoms from '../atoms';
import Icons from '../icons';

export default function Guide() {
  const theme = useContext(ThemeContext);
  return (
    <Atoms.Wrapper
      className='section'
      flex={1}
      display='flex'
      flexDirection='column'
      justifyContent='flex-end'
      gap='7px'
      width='100%'
    >
      <Atoms.Wrapper
        display='flex'
        alignItems='center'
        gap='8px'
        width='100%'
        padding='30px 20px'
        borderRadius='10px'
        backgroundColor={theme.colors.secondary_01}
      >
        <Icons.Guide />
        <Atoms.Wrapper display='flex' flexDirection='column' gap='7px'>
          <Atoms.Head16 color='grey800'>레버 이용 가이드</Atoms.Head16>
          <Atoms.Body12 color='grey300'>시작하기 전에 알아보기</Atoms.Body12>
        </Atoms.Wrapper>
      </Atoms.Wrapper>

      <Atoms.Wrapper
        display='flex'
        flexDirection='column'
        gap='10px'
        width='100%'
        margin='40px 0 0 0'
        padding='0px 20px'
      >
        <Atoms.Body12 color='grey300'>레버는 함께 만들어갑니다.</Atoms.Body12>
        <a
          href='https://biz.lever.me/terms/use'
          target='blank'
          style={{
            textDecoration: 'underline',
            textDecorationColor: theme.colors.grey300,
            textDecorationWidth: '2px'
          }}
        >
          <Atoms.Body12 color='grey300'>이용약관</Atoms.Body12>
        </a>
      </Atoms.Wrapper>
    </Atoms.Wrapper>
  );
}
