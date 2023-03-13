export type UserProps = {
  avatar_url: string;
  login: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
};

export type ReposProps = {
  name: string;
  description: string;
  language: string;
  svn_url: string;
  id: number;
};
