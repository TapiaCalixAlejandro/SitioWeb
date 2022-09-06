import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './users/create/create.component';
import { IndexComponent } from './users/index/index.component';

const routes: Routes = [
  // {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'users',component:IndexComponent},
  {path:'users/create',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
