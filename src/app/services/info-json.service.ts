import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfoJSONService {
  info:any = {};
  load = false;
  constructor(private http:HttpClient) {}
  public getUsers():Observable<any>{
    return this.http.get("../../assets/data/data.json");
  }
}
