import { HeroDetailModule } from './../hero-detail/hero-detail/hero-detail.module';
import { HeroDetailRoutingModule } from './../hero-detail/hero-detail-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { HeroesRoutingModule } from './heroes-routing.module';

import { MypipePipe } from '../my-pipes/mypipe.pipe';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessagesComponent } from '../messages/messages.component';
import { HeroesComponent } from './heroes.component';


@NgModule({
  declarations: [
    HeroesComponent,
    MessagesComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HeroesRoutingModule,
    HeroDetailRoutingModule,
    HeroDetailModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
      ]
})
export class HeroesModule { }
