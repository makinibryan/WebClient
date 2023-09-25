import { Injectable } from '@angular/core';
import { ApiHandlerServiceService } from './api-handler-service.service';
import { API_URLS } from 'config';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {

  constructor(private appService: ApiHandlerServiceService) { }
  get(endpoint: string)
  {
    return this.appService.Get(API_URLS.employees+endpoint);
  }
  post(endpoint : string, body?: any)
  {
    return this.appService.Post(API_URLS.employees+endpoint, body);
  }
  put(endpoint: string, body?: any)
  {
    return this.appService.Put(API_URLS.employees+endpoint, body)
  }
  delete(endpoint: string)
  {
    return this.appService.Delete(API_URLS.employees+endpoint);
  }

}
