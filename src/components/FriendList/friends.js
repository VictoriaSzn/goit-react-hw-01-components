import PropTypes from 'prop-types';
import styles from './friendList.module.css';

export default function Friends({ avatar, name, isOnline, }) {
    return (
        <>
            <span className={ isOnline ? styles.statusOnline : styles.statusOffline}>{ isOnline}</span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </>  
    );
};

Friends.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};