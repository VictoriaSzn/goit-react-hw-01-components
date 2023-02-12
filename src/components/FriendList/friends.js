import PropTypes from 'prop-types';

export default function Friends({ avatar, name, isOnline, }) {
    return (
        <li className="item">
            <span className="status">{ isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>  
    );
};

Friends.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};