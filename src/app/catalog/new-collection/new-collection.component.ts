import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent implements OnInit {
cena = 'ЦЕНА';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
