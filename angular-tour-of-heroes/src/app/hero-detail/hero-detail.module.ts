import { FormsModule } from '@angular/forms';
import { MypipePipe } from './../my-pipes/mypipe.pipe';
import { HeroDetailComponent } from './hero-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';


@NgModule({
  declarations: [
    HeroDetailComponent,
    MypipePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailRoutingModule
  ]
  ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroDetailModule { }
