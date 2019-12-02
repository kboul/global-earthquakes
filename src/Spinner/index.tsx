import React, { FC } from 'react';
import loader from './loader.gif';
import styles from './index.module.sass';

const Spinner: FC = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt="loader" />
        </div>
    );
};

export default Spinner;
