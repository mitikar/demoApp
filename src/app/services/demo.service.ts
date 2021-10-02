import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class DemoService {
    private REST_API_SERVER = "https://pokeapi.co/api/v2/pokemon/";

    constructor(private httpClient:HttpClient) {}
 
   
    getData() {
        return this.httpClient.get(this.REST_API_SERVER);
    }
    getDetails(api: any) {
      debugger;
      return this.httpClient.get(api);
    }
}