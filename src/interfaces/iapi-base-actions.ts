import { ParamMap, Params } from "@angular/router";
import { Observable } from "rxjs";

export interface IApiBaseActions {
  Get(url: string, params?: Params) : Observable<any>;
  GetAll(url: string, params? : Params) : Observable<any>;
  Post(url: string, params? : Params) : Observable<any>;
  Put(url: string, params? : Params) : Observable<any>;
  Delete(url: string, params? : Params) : Observable<any>;

}

