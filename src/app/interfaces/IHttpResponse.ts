import { IUser } from "./IUser";

export interface IHttpResponse {
    
    token:string;
    dbUser:IUser;
}