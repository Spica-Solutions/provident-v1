import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V1Resolver } from './modules/layout/v1/resolvers/v1-main.resolver';

const routes: Routes = [
    { path: '', redirectTo: 'v2', pathMatch: 'full' },
    {
        path: 'v1',
        loadChildren: async () => (await import('./modules/layout/v1/v1.module')).V1Module,
        resolve: { data: V1Resolver }
    },
    {
        path: 'v2',
        loadChildren: async () => (await import('./modules/layout/v2/v2.module')).V2Module
    },
    { path: 'portal', loadChildren: async () => (await import('./modules/portals/member/member.module')).MemberModule  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
