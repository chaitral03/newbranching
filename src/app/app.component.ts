import { Component } from '@angular/core';
import * as $ from 'jquery';
import {  animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'protest2';
  public ngOnInit(){
    
    $(document).ready(function(){
 
      $('.card').hover(
         function(){
           $(this).animate({
            marginTop:"-3%",
           },100);
           console.log("hello");

         },
     
         function(){
           $(this).animate({
            marginTop:"0%"
           },200);
         }
      );
     
     });
     
  }

}
