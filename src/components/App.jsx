import profile from '../user.json';
import friends from '../friends.json';
import statsData from '../data.json';
import transactionsData from '../transactions.json';

import FriendList from './FriendList/friendList';
import Profile from "./Profile/profile";
import Statistics from './Statistics/statistics';
import TransactionHistory from './TransactionHistory/transaction';


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
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
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactionsData} />;    
    </div>
  );
};
