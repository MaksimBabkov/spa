import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jacket',
  templateUrl: './jacket.component.html',
  styleUrls: ['./jacket.component.css']
})
export class JacketComponent implements OnInit {

  firstLoad: boolean = true;


   msg:string = '..//../assets/pidjack/s.jpg';


  constructor() { }

  clickMent(){
    this.msg = '..//../assets/pidjack/s.jpg';
    return this.msg;
  }

  clickEvent(){
    this.msg = '..//../assets/pidjack/s1.jpg';
    return this.msg;
  }

  clickJacket(){
    this.msg = '..//../assets/pidjack/s2.jpg';
    return this.msg;
  }

  clickJacketStyle(){
    this.msg = '..//../assets/pidjack/s3.jpg';
    return this.msg;
  }

  clickJacketTop(){
    this.msg = '..//../assets/pidjack/s4.jpg';
    return this.msg;
  }


  ngOnInit(): void {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}
