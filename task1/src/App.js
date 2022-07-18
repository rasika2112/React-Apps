import './App.css';
import React, {useState, useEffect} from 'react';
import ShowData from './components/ShowData';
import axios from 'axios';

function App() {
  
  const [data, setData] = useState('');

  useEffect(() => {
    const response = axios.get('https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1').then(response => {
        setData(response.data);
        console.log("Data fetched");
        console.log(response.data);
    }).catch(err => console.log(err));

    console.log(data);
    console.log("App rendered");
}, []);

  return (
      <ShowData data={data} />
  );
}

export default App;
