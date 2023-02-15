import PropTypes from 'prop-types';
import styles from './friendList.module.css';

export default function FriendListItem({ avatar, name, isOnline, }) {
    return (
        <>
            <span className={ isOnline ? styles.statusOnline : styles.statusOffline}>{ isOnline}</span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </>  
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};