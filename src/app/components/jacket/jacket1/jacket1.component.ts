import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jacket1',
  templateUrl: './jacket1.component.html',
  styleUrls: ['./jacket1.component.css']
})
export class Jacket1Component implements OnInit {

  firstLoad: boolean = true;

  msg:string = '..//../assets/pidjack2/q.jpg';


  constructor() { }

  clickMent(){
    this.msg = '..//../assets/pidjack2/q.jpg';
    return this.msg;
  }

  clickEvent(){
    this.msg = '..//../assets/pidjack2/q1.jpg';
    return this.msg;
  }

  clickJacket(){
    this.msg = '..//../assets/pidjack2/q2.png';
    return this.msg;
  }

  clickJacketStyle(){
    this.msg = '..//../assets/pidjack2/q3.jpg';
    return this.msg;
  }

  clickJacketTop(){
    this.msg = '..//../assets/pidjack2/q4.jpg';
    return this.msg;
  }

  ngOnInit(): void {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}
