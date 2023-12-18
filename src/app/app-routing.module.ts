import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'pet', component:PetsComponent},
  {path: 'users', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
