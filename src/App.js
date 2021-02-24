import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./db/user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./db/statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./db/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./db/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} title="UPLOAD STATS" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
