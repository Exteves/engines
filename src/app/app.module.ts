import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeComponent } from './me/me.component';
import { TrackScrollDirective } from './shared/directives/track-scroll.directive';
import { ContentComponent } from './me/components/content/content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressComponent } from './me/components/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    TrackScrollDirective,
    ContentComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
