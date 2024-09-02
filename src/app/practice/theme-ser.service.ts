import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSerService {
  private themeKey = 'selectedItem';
  pageData:any = document.body;
  // setTheme(theme: string): void {
  //   const data =document.body.style.background = theme// Apply theme immediately
  //   localStorage.setItem(this.themeKey, data);
  //   document.documentElement.setAttribute(this.themeKey,data);
  // }

  // getTheme(): string | null {
  //   return localStorage.getItem(this.themeKey);
  // }

  // setTheme(theme:string){
  //  document.body.style.background = theme;
  //       localStorage.setItem(this.themeKey,theme)
        
  // }

  // getTheme(){
  //    const set =  localStorage.getItem(this.themeKey);
  //   if(set){
  //     document.body.style.background = set;
  //   }
  // }

  // applyTheme(theme: string){
  //   document.documentElement.setAttribute('data-theme', theme);
  // }
           
      // setTheme(color:string){
      //     localStorage.setItem('themeKey',color);
      //     localStorage.setItem('theme',color);
      // }

      // getTheme(){
      //  const resulttheme = localStorage.getItem('themeKey');
      //  const result = localStorage.getItem('theme');
      //  console.log("resulttheme",resulttheme);
      //  console.log("result",result);
      //  if(resulttheme)
      //  document.body.style.background = resulttheme;
      // }
          
    // showData1(){
    //   localStorage.setItem('themeKey',this.pageData);
    // }
         
    //      getData(){
    //        const result=  localStorage.getItem('themeKey')
         
    //        if(result){
    //         this.pageData = document.body;
    //        }
          
    //      }

    // Yahan pe humne BehaviorSubject use kiya hai jo ek default value ke saath start hota hai
  private messageSource = new BehaviorSubject<string>('Default Message');
  
  // Isko observable banaya jisse components subscribe kar sakte hain
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // Yeh method service ke through data update karne ke liye hai
  changeMessage(message: string) {
     this.messageSource.next(message);
     return 'Message updated successfully';
  }
  }
