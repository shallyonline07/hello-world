import { NotFoundComponent } from './components/routing-example/not-found/not-found.component';
import { Comp2Component } from './components/routing-example/feature2/comp2/comp2.component';
import { Comp1Component } from './components/routing-example/feature1/comp1/comp1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'feature1',
        component: Comp1Component
    },
    {
        path: 'feature2',
        component: Comp2Component
    },
    {
        path: 'feature3',
        loadChildren: () => import('./components/routing-example/feature3/feature3.module').then(m => m.Feature3Module)
    },
    {
        path: '**',
        // component: NotFoundComponent
        redirectTo: 'feature1',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
