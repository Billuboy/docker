/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function Index() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = `http://localhost:${
    process.env.REACT_APP_API_LOCAL_PORT ?? 3001
  }`;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${baseURL}/`);
      setUsers(data);
      setLoading(false);
    })();
  }, []);

  const mapData = () =>
    users.map((val, index) => (
      <div key={val.id}>
        {index + 1}. {val.name}
      </div>
    ));

  if (loading) {
    <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Data Comming from MySQL database and express API</h3>
      <div>{!loading && mapData()}</div>
    </div>
  );
}

ReactDOM.render(<Index />, document.querySelector('#root'));
