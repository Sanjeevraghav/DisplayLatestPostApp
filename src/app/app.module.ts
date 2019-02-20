import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// features modules
import { PostDashboardModule } from './post-dashboard/post-dashboard.module';

//components
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
