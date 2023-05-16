import React, { useState } from "react";
import styles from "./Login.module.css";
import Buttonn from "../../components/Button/Button";
import { Input, Text } from "@nextui-org/react";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState();
  const [token, setToken] = useState("");
  token && console.log(token);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response)
      .then((data) => setToken(data.headers.get('Authorization')));
  };

  return (
    <div className={styles.login}>
      <div className={styles.heroImg}>
        <img
          src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1668620919/657417-867137095_m1i39p.jpg'
          alt='Headphone img'
        />
      </div>
      <div className={styles.form}>
        <div>
          <Text h1>Hifility</Text>
          <Text h3>Inicia sesión</Text>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            labelPlaceholder='Email'
            width='13rem'
            value={user.email}
            onChange={(e) => handleEmail(e)}
          />
          {errorEmail && <Text color='red'>Email is required</Text>}
          <Input.Password
            value={user.password}
            labelPlaceholder='Password'
            width='13rem'
            onChange={(e) => handlePassword(e)}
            initialValue=''
          />
          {errorPassword && <Text color='red'>Password is required</Text>}
          <Buttonn label='Inicia sesión' />
        </form>
      </div>
    </div>
  );
};

export default Login;
