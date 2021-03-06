import React from 'react';
import PropTypes from 'prop-types';

import {ChevronDownIcon} from '../icon';

import Button from '../button/button';

import styles from './dropdown.css';

export default function Anchor({children, ...restProps}) {
  return (
    <Button
      text
      className={styles.anchor}
      {...restProps}
    >
      {children}
      <ChevronDownIcon
        className={styles.chevron}
        size={ChevronDownIcon.Size.Size12}
      />
    </Button>
  );
}

Anchor.propTypes = {
  children: PropTypes.node
};
