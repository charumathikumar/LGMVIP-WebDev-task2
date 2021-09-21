import React ,{useState} from 'react';
import "./App.css";

function App(){
  const [user,setUsers]=useState()
 
  const getuserdata=async() =>{
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  }
return (
  <div>
  <h1 className="header">LetsGrowMore</h1>
  <div className="btn">
    <button onClick={getuserdata}>Get Users</button>
    </div>
    {  
  <div className="content">
  {user?.map((res,id) => {
    return(
      <div className="box" key={id}>
      <img src={res.avatar} alt="userimage"/>
      <div className="id">ID:{res.id}</div>
        <div className="name">{res.first_name} {res.last_name}</div>
        <div className="email"><a href="#email"> {res.email}</a></div>
        </div>
    );
  })}  
  </div>
    }
  </div>
);
}
export default App;