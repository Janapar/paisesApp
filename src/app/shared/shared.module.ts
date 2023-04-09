import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent  //Para poder usar el componente en otro componente
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
