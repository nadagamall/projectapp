import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/Order/productlist/productlist.component';


const routes : Routes =[
    {path:'Home' , component:HomeComponent},
    {path:'products', component:ProductlistComponent},
    
];

@NgModule ({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]

})
export class AppRoutingModule{}