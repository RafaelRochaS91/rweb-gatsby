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
                <h1 className={styles.container__buttons__header}>Primary Button</h1>
                <RButton text={'button example'}/>
            </div>
        )
    }

    render(){
        return this.renderButtons();
    }
}


export default Styleguide;