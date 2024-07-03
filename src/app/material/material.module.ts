import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MaterialModule { 

}
