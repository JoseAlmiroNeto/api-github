import React, { useState } from "react";
import { ReposProps, UserProps } from "../types/user";
import { Search } from "../components/Search";
import { User } from "../components/User";
import { Error } from "../components/Error";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    const resUser = await fetch(`https://api.github.com/users/${userName}`);
    const dataUser = await resUser.json();

    console.log(dataUser);

    if (resUser.status === 404) {
      setError(true);
      setUser(null);
      return;
    }

    const { avatar_url, login, bio, location, followers, following } = dataUser;

    const userData: UserProps = {
      avatar_url,
      login,
      bio,
      location,
      followers,
      following,
    };

    setError(false);
    setUser(null);
    setUser(userData);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};
