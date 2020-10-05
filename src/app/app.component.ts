import { Component,OnInit,ViewChild, ElementRef} from '@angular/core';
import { RootService } from './root.service';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {chat} from "./chat.model";
import {map} from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private http: HttpClient) { }
 
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  @ViewChild('scrollBottom', {static: true}) private myScrollContainer: ElementRef;

  show11: boolean = false;
  ss: boolean= false;
  show: boolean = false;
  dis: boolean = false;
  chat: chat[] = [];
  title = 'front-design';
  feed="";
  aa="";
  kk="";
bb="";
cc="";
respo=""
value=1;
//demo="apple assam april ahom alaska alpenliba akram asana aaram ";
test: string[]=[];
 



   onClickMe44(i:any) {
   this.show11=true;
   this.value=i-1;
   }


   onClickMe444(i:any) {
    var audio = new Audio('http://localhost:3000/dataaa');
    audio.play();
    }
    onClickMe111() {
    
   this.chat.length=0
      
     
      }
 
  onSubmit(f: NgForm) {
    this.chat.length=0
    this.ss=true;
    this.show11=false;
    if(f.value.email==null || f.value.email==" ")
    {

    }
    else
    {
    this.kk=f.value.email;
    var   chat1=
    {
      id:1,
      chat:this.kk
    }
    this.aa=""
    this.bb=" "
    this.cc=" "
    var   chat1=
    {
      id:3,
      chat:this.kk
    }
   
    this.chat.push(chat1)
 
    this.serverContentInput.nativeElement.focus();

    this.http.post('http://localhost:3000/GetError',{ title: chat1.chat }).subscribe((response)=>{
     var aqa=response.toString();
   var t= aqa.split(",");
   var tt=this.kk.split(" ");
  
   for(var o=0;o<t.length;o++)
   {
if(t[o]=="1")
{
  var   chat1=
  {
    id:1,
    chat:tt[o]
  }
 
  this.chat.push(chat1)
}
else
{
  var   chat1=
  {
    id:0,
    chat:tt[o]
  }
 
  this.chat.push(chat1)
}
   }

  
/*
      var   chat1=
      {
        id:1,
        chat:aqa.toString()
      }
     
         this.chat.push(chat1)
*/








    },(error)=>{
      console.log('error during post is ', error)
    })
  }
  }
}
