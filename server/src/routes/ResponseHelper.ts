import express, { Response } from 'express';
import { ISearchResult } from '../entities/CommonTypes';
export class ResponseHelper {
    public static sendError(error:string|string[],res: Response){
        let err:string;
        if(Array.isArray(error)){
            err=error.join(',');
        }else{
            err=error;
        }
        res.send({
            err: err,
            data: null
        });

    }
    public static sendData(data: any,res: Response) {
        res.send({
         err:"",
            data: data
        });
    }
        public static sendPageData<T>(result: ISearchResult<T>,res: Response) {
            if(result.Errors&&result.Errors.length>0){
                this.sendError(result.Errors,res);
                return;
            }else{
                  res.send({
                    err:"",
                    data: result.data,
                    total:result.count
                });
            }
      
    }
}