import React, { useState } from "react";
import { loginService } from "../services/auth";

function Login() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const data = { username: email, password: password };
      await loginService(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={login}>
        <input
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;