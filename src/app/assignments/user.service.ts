import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   apiUrl='https://demo.codingbirdsonline.com/country-state-city-dropdown-api/index.php?endpoint=getcountry'

   constructor(private http:HttpClient){}

   getCountry(term:any){
         
    return this.http.get(this.apiUrl);
   }
}
