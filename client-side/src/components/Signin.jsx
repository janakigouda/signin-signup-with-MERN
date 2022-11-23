import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState({
        email:"",
        password:""
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleLogin=()=>{
        const {email,password}=user;
        console.log(user)
        if(email && password){
            axios.post("http://localhost:8080/signin",user).then(res=>{
                alert("Login successfully done");
                console.log(res.data);
            })
            .catch((e)=>{
                alert("Login unsuccessfully");
                console.log(e);
            });
            navigate(`/home`);
        }
    }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={user.email}
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

export default Signin;
