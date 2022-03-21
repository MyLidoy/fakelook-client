import { Ipost } from "../interfaces/IPost";
import { CesiumEntity } from "../interfaces/IPost";
export class PostConverter{
    public static convertIpostToCesiumEntity(post:Ipost):CesiumEntity{
        let entity:CesiumEntity =
        {
            id: post.id.toString(),
            description: post.description,
            imageSrc: post.imageSorce, 
            location: Cesium.Cartesian3.fromDegrees(post.x_Position,  post.y_Position),
            isShow: true
        };

        return entity
    }
}