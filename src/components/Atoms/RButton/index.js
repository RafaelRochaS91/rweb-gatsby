import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './index.module.scss';

class RButton extends PureComponent {

  renderRButton = () => {
    const { text, onClick, danger, primary, secondary } = this.props;
    const buttonClass = cx(
      styles.button,
      { [ styles['button--primary'] ]: primary  },
      { [ styles['button--secondary']]: secondary },
      { [ styles['button--danger'] ]: danger },
    );
    
    return <button className={buttonClass} onClick={onClick}><p className={buttonClass}>{text}</p></button>;
  }

  renderButtonAsLink = () => {
    const { to } = this.props;
    
    return(
        <Link to={`/${to}/`}>{this.renderRButton()}</Link>
      );
  
  }

  render() {
    const { link } = this.props;

    if(link){
      return this.renderButtonAsLink();
    }

    return this.renderRButton();
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
