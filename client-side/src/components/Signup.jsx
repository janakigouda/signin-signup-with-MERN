import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate=useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    password: "",
  });

  let handleChange=(e)=>{
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  let handleRegister=()=>{
    const {username,email,age,password}=user;
    console.log(user)
    if(username && email && age && password){
        axios.post("http://localhost:8080/signup",user).then(res=>{
            console.log(res);
        })
        alert("User registered successfully");
        navigate("/signin");
    }

  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter age"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="XXXXXXXXXXX"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Signup;
