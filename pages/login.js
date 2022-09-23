import React, { useState, useEffect } from "react";

import { user } from "../assets/username";
import { useRouter } from "next/router";
import axios from "axios";

async function postAPI(url, data) {
  await axios
    .post(url, data)
    .then((res) => {
      localStorage.setItem("token", res.data.accessToken);
      setToken(res.data.accessToken);
    })
    .catch((err) => console.log(err));
}

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const round = useRouter();
  useEffect(() => {
    // You now have access to `window`
    setToken(localStorage.getItem("token"));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // const url = "https://www.mecallapi.com/api/login";
    // const data = {
    //   username: "karn.yong@mecallapi.com",
    //   password: "mecallapi",
    //   expiresIn: 60000,
    // };
    // postAPI(url, data);
    if (username.includes(user.id) && password.includes(user.password)) {
      localStorage.setItem("token", `${user.id}_${user.password}_valid`);
      round.push("/");
      console.log("valid");
    } else {
      console.log("fail");
    }
  }

  return (
    <div className="max-w-[720px] w-[720px] p-10 h-[100vh] bg-neutral-50 overflow-auto flex justify-center items-center">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col gap-y-2">
          <input
            type="text"
            placeholder="usename"
            className="p-2"
            name={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            className="p-2"
            name={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          className="bg-neutral-900 text-neutral-50 my-2 p-2 w-full"
          value={"Login"}
        />
      </form>
      {/* <form action="/">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
            <input type="submit"/>
        </form> */}
    </div>
  );
}

export default Login;
