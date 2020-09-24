import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'v1', pathMatch: 'full' },
    { path: 'v1', loadChildren: async () => (await import('./modules/layout/v1/v1.module')).V1Module }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
