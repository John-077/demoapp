import React, { useState } from "react";
function AddEmployee(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // write a function to handle the form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: fname,
      last_name: lname,
      email: email,
      password: password,
    };
    // send the data to server
    const apiUrl = "http://localhost:5000/add-employees";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const response = fetch(apiUrl, requestOptions);
    response
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    console.log(response);
  };
     
  return (
    <div>
      <h1>Add employee</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />

        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />

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
export default AddEmployee;
