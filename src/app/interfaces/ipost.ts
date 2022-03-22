import { ITagPost } from "./ITagPost";
import { IUserTagPost } from "./IUserTagPost";


export interface Ipost {
    id:number; 
    description:string;
    imageSorce:string;
    x_Position:number;
    y_Position:number;
    z_Position:number;
    date:Date;
    userId:number;
    IUserTagPost:IUserTagPost[];
    ITagPost:ITagPost[];
}

export interface CesiumEntity{
    id: string;
    description: string;
    imageSrc: string;
    location: { x: number; y: number; z: number };
    isShow: boolean;
     
    
}
