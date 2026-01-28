
export interface IResponseError {
    data:null;
    err:string;
}

export interface IResponseData<T> {
    data:T;
    err:"";
}


export interface IResponsePageData<T> {
    err:'',
    total:number,
    data:T[];
}
 export interface ISearchCondition{
    page?: number;
    limit?: number;
    key?: string;
 }