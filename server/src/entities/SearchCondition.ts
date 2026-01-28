import { IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { BaseEntity } from './BaseEntity';

export class SearchCondition  extends BaseEntity{
    @IsInt({message:'页码必须为整数'})
    @Min(1,{message:'页码最小值1'})
    @Type(()=>Number)
    public page: number=1;
     @IsInt({message:'页容量必须为整数'})
    @Min(1,{message:'页容量最小值1'})
     @Type(()=>Number)
    public limit: number=10;
    @Type(()=>String)
    public key: string='';
    /**
     * 将一个平面对象转换为SearchCondition对象
     * @param plainObject 平面对象
     */
    public static transform(plainObject:Object): SearchCondition {
        return super.baseTransform(SearchCondition, plainObject);
    }
   
}