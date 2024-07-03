import { Component, inject } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ApiRestService } from '../service/api-rest.service';
import { Observable } from 'rxjs';
import { rickInterface } from '../interfaces/rick.interface';

@Component({
  selector: 'app-pregunta-uno',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta-uno.component.html',
  styleUrl: './pregunta-uno.component.css'
})
export class PreguntaUnoComponent {
  
  api:ApiRestService = inject(ApiRestService);
  listaEpisodio:rickInterface[]=[]

  ngOnInit(){
    this.getEpisodios();
  }

  getEpisodios(){
    this.api.getEpisodiosAll().subscribe({
      next:(episodios)=>{
        this.listaEpisodio = episodios
      },
      error:(error)=>{
        console.log(error);
      }
    })

  }

}
