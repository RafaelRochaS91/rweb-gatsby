import React, { PureComponent } from 'react';

import { RButton } from '../../components/Atoms';

import styleguideStyles from '../../shared/styleguide.scss';
import styles from './index.module.scss';


class Styleguide extends PureComponent{

    renderTextTypes () {

    }

    renderButtons () {
        return(
            <div className={styles.container__buttons}>
                <h1 className={styles.container__buttons__header}>Buttons</h1>
                <RButton text={'primary button example'} primary />
                <RButton text={'secondary button example'} secondary />
                <RButton text={'danger button example'} danger />
            </div>
        )
    }

    render(){
        return(
            <div className={styles.container}>
                {this.renderButtons()}
            </div>
        );
        
    }
}


export default Styleguide;