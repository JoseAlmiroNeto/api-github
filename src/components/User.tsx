import { useState, useEffect } from "react";
import { ReposProps, UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";

export const User = ({
  avatar_url,
  login,
  bio,
  location,
  followers,
  following,
}: UserProps) => {
  const [repos, setRepos] = useState([]);

  const loaderRepos = async () => {
    const resRepos = await fetch(`https://api.github.com/users/${login}/repos`);
    const dataRepos = await resRepos.json();
    setRepos(dataRepos);
  };

  useEffect(() => {
    loaderRepos();
  }, [login]);

  return (
    <div className="flex text-white w-full rounded-xl border-t-2">
      <div className="flex flex-col items-center py-20 min-h-[930px] w-[20%] bg-black gap-10">
        <img
          className="w-[250px] h-[250px] rounded-full border-[3px]"
          src={avatar_url}
          alt={login}
        />
        <strong className="text-2xl">{login}</strong>
        <p className="text-center">{bio}</p>
        {location && (
          <p className="flex items-center gap-2">
            <MdLocationPin size={20} color="#479F9A" />
            <strong className="text-[#787FB3] text-lg">{location}</strong>
          </p>
        )}
        <div className="flex">
          <div className="flex flex-col items-center px-3 border-r-[2px]">
            <strong>Seguidores:</strong>
            <p className="bg-[#479F9A] w-full text-center rounded">
              {followers}
            </p>
          </div>
          <div className="flex flex-col items-center px-3 ">
            <strong>Seguindo:</strong>
            <p className="bg-[#479F9A] w-full text-center rounded">
              {following}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 w-[80%] min-h-[930px] bg-zinc-800 p-10">
        {repos &&
          repos.map((item: ReposProps) => {
            let color = "";
            if (item.language === "TypeScript") {
              color = "#1938D8";
            } else if (item.language === "JavaScript") {
              color = "#F6FF68";
            } else if (item.language === "HTML") {
              color = "#CC0000";
            } else if (item.language === "CSS") {
              color = "#A855F7";
            }

            return (
              <div
                key={item.id}
                className="bg-zinc-900 w-[270px] h-[270px] flex flex-col items-center justify-between p-4"
                style={{ borderLeft: `4px solid ${color}` }}
              >
                <strong className="text-2xl">{item.name}</strong>
                {item.description && (
                  <p className="w-full h-[157px] overflow-hidden text-sm">
                    {item.description}
                  </p>
                )}
                <div className="flex w-full justify-between">
                  <p style={{ color }} className="font-semibold">
                    {item.language}
                  </p>
                  <a
                    style={{ color }}
                    href={item.svn_url}
                    className="font-bold text-xl"
                    target="_blank"
                  >
                    Ver
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
