import { cookies } from "next/headers";
import { FC } from "react";
import JWT from 'jsonwebtoken';
import { ENC_KEY } from "@/constants";

const SecretPage: FC = () => {
  const allCookies = cookies();

  const jwt = allCookies.get('session')?.value;

  if (!jwt) {
    return null;
  }

  try {
    const payload = JWT.verify(jwt, ENC_KEY);
    const username = (typeof payload == 'object') ? payload.username : null;

    return (
      <div>
        {username && <h1>Welcome, {username}</h1>}
        {!username && <h1>You are not allowed here!</h1>}
      </div>
    );
  } catch (err) {
    return (
      <div>
        <h1>Invalid session!</h1>
        <p>Did you tamper with your cookie?</p>
      </div>
    );
  }
}

export default SecretPage;