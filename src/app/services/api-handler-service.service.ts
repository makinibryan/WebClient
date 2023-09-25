import { Params } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IApiBaseActions } from 'src/interfaces/iapi-base-actions';
import { API_URLS, responseMessage } from 'config';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerServiceService implements IApiBaseActions {

  constructor(private http: HttpClient) { }

  Get(url: string, params?: Params | undefined): Observable<any> {
    return this.http
    .get(url, {params: this.createParams(params)})
    .pipe(tap((x) => this.handleResponse(x)));
  }


  GetAll(url: string, params?: Params | undefined): Observable<any> {
    return this.http
    .get(url, {params:this.createParams(params)})
    .pipe(tap((x) => this.handleResponse(x)));
  }
  Post(url: string, params?: Params | undefined): Observable<any> {
    return this.http
    .post(url, {params: this.createParams(params)})
    .pipe(tap((x) => this.handleResponse(x)));
  }
  Put(url: string, params?: Params | undefined): Observable<any> {
    return this.http.put(url, {params : this.createParams(params)})
    .pipe(tap((x) => this.handleResponse(x)));
  }
  Delete(url: string, params?: Params | undefined): Observable<any> {
    return this.http.delete(API_URLS.employees, {params: this.createParams(params)})
    .pipe(tap((x) => this.handleResponse(x)));
  }

  handleResponse(respose: any)
  {
    if(respose === 500)
    {
      alert(responseMessage.ServerError);
    }
  }

  createParams(params?: Params){
    let httpParams = new HttpParams();
    if(params)
    {
      Object.entries(params).forEach(([key, value]) =>{
        httpParams = httpParams.append(key, value);
      })
    }
    return httpParams;
  }

}
