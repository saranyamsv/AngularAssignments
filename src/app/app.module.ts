import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagedisplayComponent } from './messagedisplay/messagedisplay.component';
import { UpdatemessageComponent } from './updatemessage/updatemessage.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagedisplayComponent,
    UpdatemessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
