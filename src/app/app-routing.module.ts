import { Feature1Guard } from './guards/feature1.guard';
import { NotFoundComponent } from './components/routing-example/not-found/not-found.component';
import { Comp2Component } from './components/routing-example/feature2/comp2/comp2.component';
import { Comp1Component } from './components/routing-example/feature1/comp1/comp1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/routing-example/error/error.component';

const routes: Routes = [
    {
        path: 'feature1',
        component: Comp1Component,
        canActivate: [Feature1Guard]
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
        path: 'error',
        component: ErrorComponent
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
