import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SocketIoModule,SocketIoConfig} from 'ngx-socket-io';
const config:SocketIoConfig={url:'https://localhost:3000',options:{}};



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ChatComponent } from './chat/chat.component';
import { AudioComponent } from './audio/audio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    ChatComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
