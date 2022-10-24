import { type } from "os";
import { Token } from "typescript";
import { IUserLogin } from "../pages/Login";

export interface IUserContext {
  postRegister(data: IUserRegister): void;
  postLogin(data: IUserLogin): void;
  goOut(): void;
  getProfile(token: string): void;
  createProject(data: ITech): void;
  deleteProject(data: string): void;
  editProject(data: ITech): void;

  tokenUser: string;
  profileData: IProfile;
  visibleModalCreater: boolean;
  setVisibleModalCreater(boolean: boolean): void;
  visibleModalEdit: boolean;
  setVisibleModalEdit(boolean: boolean): void;
  project: IProject;
  setProject(data: IProject): void;
}

export interface IUserRegister {
  id: string;
  avatar_url: null | string;
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  updated_at: string;
}

export interface ILoginProfile {
  token: string;
  avatar_url: string | null;
  id: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  name: string;
  updated_at: string;
  techs: IProject[];
  works: string[];
}

export type IProfile = Omit<ILoginProfile, "token">;

export interface IProject {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface IProps {
  object: IProject;
}

export interface ITech {
  title: string;
  status: string;
}
