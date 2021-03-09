import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { ResumoComponent } from './resumo/resumo.component';

let routes = [
  {path:"resumo", component: ResumoComponent},
  {path:"consulta",component: ConsultaComponent},
  {path: "**", redirectTo:"/resumo"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
