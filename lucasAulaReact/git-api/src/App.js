import './app.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState({});
  
  useEffect(async()=>{
    const response = await axios.get("https://api.github.com/users/lucasherzer")
    setData(response.data);
  },[])

  return (
    <div className="ok">
      {data.login}
    </div>
  );
}

//https://api.github.com/users/lucasherzer
export default App;
