import { Routes } from '@angular/router';
import { PreguntaUnoComponent } from './pregunta-uno/pregunta-uno.component';
import { PreguntaDosComponent } from './pregunta-dos/pregunta-dos.component';

export const routes: Routes = [
    {
        path:"preguntaUno",
        component:PreguntaUnoComponent
    },
    {
        path:"preguntaDos",
        component:PreguntaDosComponent
    },
    {
        path:"**",
        redirectTo:"preguntaUno"
    }
];
