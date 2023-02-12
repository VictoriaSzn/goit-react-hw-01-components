import profile from '../user.json';
import FriendList from './FriendList/friendList';
import Profile from "./Profile/profile";
import friends from '../friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        followers={profile.stats.followers}
        views ={profile.stats.views}
        likes = {profile.stats.likes}
      />
        <FriendList friends={friends} />
    </div>
  );
};
