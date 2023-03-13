type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className="flex flex-col justify-evenly items-center bg-zinc-900 text-white w-[33%] h-[230px] rounded-xl">
      <strong className="text-3xl">Busque por um usuário</strong>
      <p className="text-zinc-400 text-xl">
        Conheça seus melhores repositórios
      </p>
      <div className="w-full flex justify-center">
        <input
          className="p-2 w-[45%] rounded-l h-[40px] text-black"
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="bg-zinc-800 w-[30px] h-[40px] flex items-center justify-center rounded-r"
          onClick={() => {
            loadUser(userName);
          }}
          onKeyDown={handleKeyDown}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
