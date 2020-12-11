
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
//import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BasketComponent } from './basket/basket.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { JobComponent } from './job/job.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
//import { Browser } from 'protractor';
import { SaleComponent } from './catalog/sale/sale.component';
import { NewCollectionComponent } from './catalog/new-collection/new-collection.component';
import { SpringSummerComponent } from './catalog/spring-summer/spring-summer.component';
import { DescriptionComponent } from './payment/description/description.component';
import { DetailsComponent } from './payment/details/details.component';
import { ReturnsComponent } from './payment/returns/returns.component';
//import { UserComponent } from './user/user.component';
import { JacketComponent } from './components/jacket/jacket.component';
import { Jacket1Component } from './components/jacket/jacket1/jacket1.component';
import { Jacket2Component } from './components/jacket/jacket2/jacket2.component';

import { ShirtComponent } from './components/shirt/shirt.component';
import { Shirt1Component } from './components/shirt/shirt1/shirt1.component';
import { Shirt2Component } from './components/shirt/shirt2/shirt2.component';

import { TrousersComponent } from './components/trousers/trousers.component';
import { Trousers1Component } from './components/trousers/trousers1/trousers1.component';
import { Trousers2Component } from './components/trousers/trousers2/trousers2.component';




const routes: Routes = [
  { path: '*',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'catalog', component: CatalogComponent , children: [
    {path: 'sale/:id', component: SaleComponent, data:{breadcrumbs: 'sale'}},
    {path: 'new-collection/:id', component: NewCollectionComponent, data:{breadcrumbs: 'new-collection'}},
    {path: 'spring-summer/:id', component: SpringSummerComponent, data:{breadcrumbs: 'spring-summer'}}
 ]
},

  //{ path: 'user', component: UserComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'job', component: JobComponent },
  { path: 'reviews', component: ReviewsComponent },

  //jacket
  { path: 'jacket', component: JacketComponent , children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
},


  { path: 'jacket1', component: Jacket1Component , children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
 },
  { path: 'jacket2', component: Jacket2Component , children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
 },

  //shirt
  { path: 'shirt', component: ShirtComponent , children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
},
  { path: 'shirt1', component: Shirt1Component , children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
},
  { path: 'shirt2', component: Shirt2Component , children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
},

  //trousers
  { path: 'trousers', component: TrousersComponent, children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
},
  { path: 'trousers1', component: Trousers1Component, children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
},
  { path: 'trousers2', component: Trousers2Component, children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
},




  { path: 'payment', component: PaymentComponent, children:  [
    {path: 'description/:id', component: DescriptionComponent, data:{breadcrumbs: 'description'}},
    {path: 'details/:id', component: DetailsComponent, data:{breadcrumbs: 'details'}},
    {path: 'returns/:id', component: ReturnsComponent, data:{breadcrumbs: 'returns'}}
 ]
},


  { path: 'contacts', component: ContactsComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
