import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './users/create/create.component';
import { IndexComponent } from './users/index/index.component';
import { ShowComponent } from './users/show/show.component';

const routes: Routes = [
  // {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'users',component:IndexComponent},
  {path:'users/create',component:CreateComponent},
  {path:'users/show',component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
