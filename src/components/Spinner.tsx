import React, { FC } from 'react';
import loader from '../assets/loader.gif';
import styles from '../styles/Spinner.module.css';

const Spinner: FC = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt="loader" />
        </div>
    );
};

export default Spinner;
