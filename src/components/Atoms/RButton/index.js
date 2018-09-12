import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './index.module.scss';

class RButton extends PureComponent {
  render() {
    const { text, onClick, danger, primary, secondary } = this.props;
    const buttonClass = cx(
      styles.button,
      { ['--primary']: primary },
      { ['--danger']: danger },
      { ['--secondary']: secondary }
    );

    return <button className={buttonClass} onClick={onClick}>{text}</button>;
  }
}

RButton.defaultProps = {
  text: '',
  primary: true,
  secondary: false,
  danger: false,
  onClick: () => {},
};

RButton.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};

RButton.displayName = 'RButton';

export default RButton;
