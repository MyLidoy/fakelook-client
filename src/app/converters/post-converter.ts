import { Ipost } from "../interfaces/IPost";
import { CesiumEntity } from "../interfaces/IPost";
export class PostConverter{
    public static convertIpostToCesiumEntity(post:Ipost):CesiumEntity{
        let entity:CesiumEntity =
        {
            id: post.id.toString(),
            description: post.description,
            imageSrc: post.imageSorce,
            location: { x: post.x_Position, y: post.y_Position, z: post.z_Position },
            isShow: true
        };

        return entity
    }
}