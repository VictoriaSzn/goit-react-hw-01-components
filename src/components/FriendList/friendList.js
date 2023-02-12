import PropTypes from 'prop-types';
import Friends from './friends';

export default function FriendList({friends}) {
    return (
        <ul className ="friend-list">
            {friends.map(frend => (
                <li key={frend.id}>
                    <Friends
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