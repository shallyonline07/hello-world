import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';
import { ColorComponent } from './color/color.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'color',
        pathMatch: 'full'
    },
    {
        path: 'color',
        component: ColorComponent,
        children: [
            {
                path: 'red',
                component: RedComponent
            },
            {
                path: 'green',      // Route with QueryString
                component: GreenComponent
            },
            {
                path: 'blue/:type',  // Route with Params
                component: BlueComponent
            },
        ]
    },
]
@NgModule({
    declarations: [RedComponent, GreenComponent, BlueComponent, ColorComponent],
    imports: [RouterModule.forChild(routes)],
    // Exports: [RouterModule]  // DO NOT Export
})

export class Feature3Module { }