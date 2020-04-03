import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MeComponent } from './me.component';

@NgModule({
  declarations: [
    AvatarComponent,
    MeComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule
  ]
})
export class MeModule { }
