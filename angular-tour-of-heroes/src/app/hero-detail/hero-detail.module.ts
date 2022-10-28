import { FormsModule } from '@angular/forms';
import { MypipePipe } from './../my-pipes/mypipe.pipe';
import { HeroDetailComponent } from './hero-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeroDetailComponent,
    MypipePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HeroDetailModule { }
