import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./db/user.json";

function App() {
  return (
    <div className="App">
      <Profile data={user} />
    </div>
  );
}

export default App;
