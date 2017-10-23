import { Tva } from './../../models/tva';
import { TvaService } from './../../services/tva.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css'],
  providers: [TvaService]
})
export class TvaComponent implements OnInit {

  public entities: Tva[]

  constructor(public tvaService: TvaService) { }
  ngOnInit() {
    this.tvaService.getAll().subscribe(data => {
      this.entities = data
    })
  }

}
