export default interface IAuthRequest {
  email: string;
  password: string;
}

export interface IEnsureAuthPayload {
  sub: string;
}
