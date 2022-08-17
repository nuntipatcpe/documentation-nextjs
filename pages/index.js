import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { user } from "../assets/username";

//styles
import button from "../styles/abstract/button";
import layout from "../styles/abstract/layout";

export default function Home() {
  const [valid, setValid] = useState(false);
  const round = useRouter();

  const {LogOutStyle} = button();
  const {container} = layout();

  useEffect(() => {
    if (localStorage.getItem("token") === `${user.id}_${user.password}_valid`) {
      setValid(true);
      console.log(valid);
    } else {
      round.push("/login");
    }
  }, []);

  function onLogout() {
    console.log("onLogout");
    localStorage.removeItem("token");
    round.push("/login");
  }
  if (valid) {
    return (
      <div className={container}>
        Home
        <button
          className={LogOutStyle}
          onClick={() => onLogout()}
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    <div className={container}></div>
  );
}
