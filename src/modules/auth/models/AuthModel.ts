import { UserModel } from "./UserModel";
export interface AuthModel {
  accessToken: string;
  user: UserModel;
  refreshToken?: string;
}
