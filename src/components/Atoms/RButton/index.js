import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './index.module.scss';

class RButton extends PureComponent {
  render() {
    const { text, onClick, danger, primary, secondary } = this.props;
    const buttonClass = cx(styles.button, { ['--primary']: primary });

    return <button className={buttonClass}>{text}</button>;
  }
}

RButton.defaultProps = {
  text: '',
};

RButton.propTypes = {
  text: PropTypes.string,
};

RButton.displayName = 'RButton';

export default RButton;
