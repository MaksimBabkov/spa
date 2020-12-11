import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trousers1',
  templateUrl: './trousers1.component.html',
  styleUrls: ['./trousers1.component.css']
})
export class Trousers1Component implements OnInit {

  firstLoad: boolean = true;

  msg:string = '..//../assets/rubashka/r1.jpg';


  constructor() { }

  clickMent(){
    this.msg = '..//../assets/rubashka/r1.jpg';
    return this.msg;
  }

  clickEvent(){
    this.msg = '..//../assets/rubashka/r2.jpg';
    return this.msg;
  }

  clickJacket(){
    this.msg = '..//../assets/rubashka/r3.jpg';
    return this.msg;
  }

  clickJacketStyle(){
    this.msg = '..//../assets/rubashka/r4.jpg';
    return this.msg;
  }

  clickJacketTop(){
    this.msg = '..//../assets/rubashka/r6.jpg';
    return this.msg;
  }

  ngOnInit(): void {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}
