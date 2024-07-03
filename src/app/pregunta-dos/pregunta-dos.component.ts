import { Component, inject } from '@angular/core';
import { ApiRestService } from '../service/api-rest.service';
import { imageInterface } from '../interfaces/image.interface';

@Component({
  selector: 'app-pregunta-dos',
  standalone: true,
  imports: [],
  templateUrl: './pregunta-dos.component.html',
  styleUrl: './pregunta-dos.component.css'
})
export class PreguntaDosComponent {

  api:ApiRestService = inject(ApiRestService);
  listaImagenes:imageInterface[]=[]

  ngOnInit(){
    this.getImages();
  }

  getImages(){
    this.api.getImageAll().subscribe({
      next:(imagen)=>{
        this.listaImagenes = imagen;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }


}
