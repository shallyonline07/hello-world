import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'red',
        pathMatch: 'full'
    },
    {
        path: 'red',
        component: RedComponent
    },
    {
        path: 'green',
        component: GreenComponent
    },
    {
        path: 'blue',
        component: BlueComponent
    }
]
@NgModule({
    declarations: [RedComponent, GreenComponent, BlueComponent],
    imports: [RouterModule.forChild(routes)],
    // Exports: [RouterModule]  // DO NOT Export
})

export class Feature3Module { }