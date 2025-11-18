import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Episodios } from '../modelos/episodios';
import { EpisodiosService } from '../services/episodios.service';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode','url','characters','created'];
  dataSource = new MatTableDataSource<Episodios>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private episodiosService: EpisodiosService) {}

  ngOnInit(): void {
    this.episodiosService.getEpisodios().subscribe({
      next: (response) => {
          this.dataSource.data = response;
          },
      error: (err) => {
        console.error('Error cargando episodios:', err);
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
