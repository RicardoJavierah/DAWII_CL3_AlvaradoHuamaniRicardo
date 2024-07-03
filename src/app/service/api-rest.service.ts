import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  apiRick:string = "https://rickandmortyapi.com/api/episode"
  apiPhoto:string = "https://jsonplaceholder.typicode.com/photos"

  constructor(private httpClient:HttpClient) { 

  }

  getEpisodiosAll():Observable<any>{
    return this.httpClient.get(this.apiRick).pipe(result=>result);
  }

  getImageAll():Observable<any>{
    return this.httpClient.get(this.apiPhoto).pipe(result=>result);
  }



}
