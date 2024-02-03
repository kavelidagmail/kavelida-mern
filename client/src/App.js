import { useEffect } from "react";
import "./App.css";
import baseUrl from "./baseUrl";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("key1");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('process env is:', JSON.stringify(process.env));
    axios
      .get(`${baseUrl}/get-users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>READ not the list</h1>
      <div>{JSON.stringify(params)}</div>
      {users &&
        users.length > 0 &&
        users.map((user) => {
          return (
            <div>
              <h3>
                {user.name} {user.lastName}
              </h3>
            </div>
          );
        })}

      <button onClick={() => navigate("create")}>Create1</button>
    </div>
  );
}

export default App;
