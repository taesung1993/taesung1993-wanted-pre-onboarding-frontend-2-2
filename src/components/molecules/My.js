import React from 'react';
import PropTypes from 'prop-types';
import Atoms from '../atoms';
import Icons from '../icons';

export default function My({ name }) {
  return (
    <Atoms.Wrapper display='flex' alignItems='center' gap='10px'>
      <Icons.Profile />
      <Atoms.Body14 color='grey800'>{`${name}님`}</Atoms.Body14>
    </Atoms.Wrapper>
  );
}

My.prototype = {
  name: PropTypes.string.isRequired
};
