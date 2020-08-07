import React, { useEffect, useState } from 'react';
import './App.css';
import UserPage from './pages/user_page.component';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      let res = await axios.get('http://localhost:5000/members');
      setData(res.data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="App">
      {loading ? '' : <UserPage in={data} />}

    </div>
  );
}

export default App;
