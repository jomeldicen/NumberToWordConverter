import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NumberConverterOutputComponent } from './number-converter-output/number-converter-output.component';
import { NumberConverterFormComponent } from './number-converter-form/number-converter-form.component';

const routes: Routes = [  
  { path: '', redirectTo: '/number-converter-form', pathMatch: 'full' },
  { path: 'number-converter-form', component: NumberConverterFormComponent},
  { path: 'number-converter-output/:num', component: NumberConverterOutputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
