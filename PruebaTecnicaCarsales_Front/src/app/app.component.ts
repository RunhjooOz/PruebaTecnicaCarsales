import { Component } from '@angular/core';
import { EpisodiosComponent } from './episodios/episodios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EpisodiosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaTecnicaCarsales_Front';
}
