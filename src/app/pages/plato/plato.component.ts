import { Plato } from './../../_model/plato';
import { PlatoService } from './../../_service/plato.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  dataSourse: MatTableDataSource<Plato>;
  displayedColumns = ['nombre','precio','acciones'];

  constructor(private platoService : PlatoService) { }

  ngOnInit() {
    this.platoService.listar().subscribe(data => {
      this.dataSourse = new MatTableDataSource(data);
    });
  }

}
