import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'fileupload', component: FileuploadComponent
  },
  {
    path: ' ', component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

