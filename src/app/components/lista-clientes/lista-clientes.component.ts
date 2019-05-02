import { Component, OnInit, ViewChild } from '@angular/core';

import { Cliente } from '../../model/Cliente';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [
    {id: 1, nombre: 'Esteban Larrea', direccion: 'Siempreviva 123'},
    {id: 2, nombre: 'Carlos Vives', direccion: 'Viva 321'},
    {id: 3, nombre: 'Abel Pintos', direccion: 'Calle 1 741'},
    {id: 4, nombre: 'Juan Baleiron', direccion: 'Pasaje Colgado 147'},
    {id: 5, nombre: 'Jorge Martinez', direccion: 'Nolase 987'}
  ];

  displayedColumns: string[] = ['id', 'nombre', 'direccion'];
  dataSource = new MatTableDataSource(this.clientes);

  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
