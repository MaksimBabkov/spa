import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { JobComponent } from './job/job.component';
import { AdminComponent } from './admin/admin.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { NavigMenuComponent } from './navig-menu/navig-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SpringSummerComponent } from './catalog/spring-summer/spring-summer.component';
import { NewCollectionComponent } from './catalog/new-collection/new-collection.component';
import { SaleComponent } from './catalog/sale/sale.component';
import { UserComponent } from './user/user.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FluidComponent } from './fluid/fluid.component';
import { VideoComponent } from './payment/video/video.component';
import { DescriptionComponent } from './payment/description/description.component';
import { DetailsComponent } from './payment/details/details.component';
import { ReturnsComponent } from './payment/returns/returns.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { RegisterComponent } from './register/register.component';
import { NewComponent } from './new/new.component';
import { ZakazpomerkamComponent } from './zakazpomerkam/zakazpomerkam.component';
import { JacketComponent } from './components/jacket/jacket.component';
import { ShirtComponent } from './components/shirt/shirt.component';
import { TrousersComponent } from './components/trousers/trousers.component';
import { Jacket1Component } from './components/jacket/jacket1/jacket1.component';
import { Jacket2Component } from './components/jacket/jacket2/jacket2.component';
import { Shirt1Component } from './components/shirt/shirt1/shirt1.component';
import { Shirt2Component } from './components/shirt/shirt2/shirt2.component';
import { Trousers1Component } from './components/trousers/trousers1/trousers1.component';
import { Trousers2Component } from './components/trousers/trousers2/trousers2.component';




@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    AboutComponent,
    DeliveryComponent,
    PaymentComponent,
    ContactsComponent,
    JobComponent,
    AdminComponent,
    BasketComponent,
    HomeComponent,
    NoPageFoundComponent,
    NavigMenuComponent,
    FooterComponent,
    SubscribeComponent,
    SpringSummerComponent,
    NewCollectionComponent,
    SaleComponent,
    UserComponent,
    ReviewsComponent,
    FluidComponent,
    VideoComponent,
    DescriptionComponent,
    DetailsComponent,
    ReturnsComponent,
    ImageCropperComponent,
    RegisterComponent,
    NewComponent,
    ZakazpomerkamComponent,
    JacketComponent,
    ShirtComponent,
    TrousersComponent,
    Jacket1Component,
    Jacket2Component,
    Shirt1Component,
    Shirt2Component,
    Trousers1Component,
    Trousers2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})


export class AppModule { }
