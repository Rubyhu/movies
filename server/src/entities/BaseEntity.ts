import {validate} from 'class-validator';
import { plainToClass } from 'class-transformer';
export abstract class BaseEntity {
    /**
     * 验证数据
     */
      public async validateThis(isSkipMissingProperties:boolean = true): Promise<string[]> {
        const errors = await validate(this,{
            skipMissingProperties: isSkipMissingProperties
        });
        let res= errors.map((e) => Object.values(e.constraints || {}))
        const result:string[] = []
        res.forEach(t=>{
            result.push(...t)
        })
        return result;
    }
     /**
     * 将一个平面对象转换为Movie对象
     * @param plainObject 平面对象
     */
      protected static baseTransform<T>(cls:new (...args: any[]) => T,plainObject:Object): T {
            if(plainObject instanceof cls){
                return plainObject;
            }
            return plainToClass(cls, plainObject);
        }
}