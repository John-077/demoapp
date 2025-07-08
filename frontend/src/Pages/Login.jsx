import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [responseMessage, setResponse] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const apiUrl = "http://localhost:5000/login";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = fetch(apiUrl, requestOptions);
    response
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
        console.log(data);
      });
  };


// console.log(response);




  return (
    <div>
        <div><h2 style={{color:"red"}}>{responseMessage}</h2></div>
      <h1>Login employee</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login
