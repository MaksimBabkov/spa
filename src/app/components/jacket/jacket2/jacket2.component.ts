import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jacket2',
  templateUrl: './jacket2.component.html',
  styleUrls: ['./jacket2.component.css']
})
export class Jacket2Component implements OnInit {

  firstLoad: boolean = true;

  msg:string = '..//../assets/pidjack3/w.jpg';


  constructor() { }

  clickMent(){
    this.msg = '..//../assets/pidjack3/w.jpg';
    return this.msg;
  }

  clickEvent(){
    this.msg = '..//../assets/pidjack3/w1.jpg';
    return this.msg;
  }

  clickJacket(){
    this.msg = '..//../assets/pidjack3/w2.jpg';
    return this.msg;
  }

  clickJacketStyle(){
    this.msg = '..//../assets/pidjack3/w3.jpg';
    return this.msg;
  }

  clickJacketTop(){
    this.msg = '..//../assets/pidjack3/w4.jpg';
    return this.msg;
  }

  ngOnInit(): void {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}
