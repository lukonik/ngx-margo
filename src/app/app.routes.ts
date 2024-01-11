import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'test',
    loadComponent:()=>import("./features/test-page/test-page.component").then(t=>t.TestPageComponent)
}];
