export default interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

export interface IUserAuthInfo {
  user_id: string;
}
