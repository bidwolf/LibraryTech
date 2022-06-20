import React from 'react';
import styles from './SocialNetwork.module.css'
import { Fragment } from 'react';
const SocialNetwork = ({name,link,icon}) => {
    return (
        <Fragment>

        <div className={styles.socialMedia}>
            <a target="_blank" href={link}>
                <img src={icon.src} alt={icon.alt} aria-label={name}></img>
            </a>
        </div>
        </Fragment>
    );
}

export default SocialNetwork;
