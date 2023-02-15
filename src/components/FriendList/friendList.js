import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import styles from './friendList.module.css';


export default function FriendList({friends}) {
    return (
        <ul className={styles.friend_list}>
            {friends.map(frend => (
                <li key={frend.id} className={styles.item}>
                    <FriendListItem
                        avatar={frend.avatar}
                        name={frend.name}
                        isOnline={frend.isOnline}
                    />
                </li>
            ))         
            }
        </ul>   
    );
};
FriendList.propTypes = {
    frend: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
   
};