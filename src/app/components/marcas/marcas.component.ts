import { Component, OnInit } from '@angular/core';
import { Marca } from '../../models/marca.model';
import { MarcaService } from '../../services/marca.service';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-marcas',
  imports: [NgFor, RouterLink, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acao'];
  marca: Marca[] = [];

  constructor(private marcaService: MarcaService){ }

  ngOnInit(): void {
    this.marcaService.findAll().subscribe(data => {
      this.marca = data;
    })
  }

}
