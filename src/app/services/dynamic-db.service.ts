import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicDBService {
  url="https://localhost:7067/api/";

  //https://localhost:7067/api/DBproductImage/getMultiImagesDatabase?productCode=001
  constructor(private http:HttpClient) { }

get(){
return this.http.get(this.url+"Customer");
}


getd(d:number){
  return this.http.get(this.url+"Customer/"+d);
  }

}
