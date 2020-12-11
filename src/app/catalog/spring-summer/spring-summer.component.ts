import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spring-summer',
  templateUrl: './spring-summer.component.html',
  styleUrls: ['./spring-summer.component.css']
})
export class SpringSummerComponent implements OnInit {
cena = 'ЦЕНА';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
