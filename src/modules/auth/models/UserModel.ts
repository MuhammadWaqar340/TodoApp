export interface UserModel {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  username?: string;
  password?: string | undefined;
  newPassword?: string;
  message?: string;
}
