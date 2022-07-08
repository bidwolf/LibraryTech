import React from 'react';
import styles from './SocialNetwork.module.css'
import { Fragment } from 'react';
interface Props {
    link: string;
    name: string;
    icon: Icon;
}
interface Icon{
    src: string;
    alt: string;
}
const SocialNetwork:React.FC<Props> = ({name,link,icon}:Props) => {
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
