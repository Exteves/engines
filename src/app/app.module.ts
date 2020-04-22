import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './me/components/avatar/avatar.component';
import { MeComponent } from './me/me.component';
import { TrackScrollDirective } from './shared/directives/track-scroll.directive';
import { ContentComponent } from './me/components/content/content.component';
import { StepperComponent } from './me/components/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    MeComponent,
    TrackScrollDirective,
    ContentComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
