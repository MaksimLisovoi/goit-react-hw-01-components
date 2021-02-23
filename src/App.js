import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./db/user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./db/statistical-data.json";

function App() {
  return (
    <div className="App">
      <Profile data={user} />
      <Statistics stats={statisticalData} title="UPLOAD STATS" />
    </div>
  );
}

export default App;
