import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { VideocomponentComponent } from './videocomponent/videocomponent.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { CentercontnetnComponent } from './centercontnetn/centercontnetn.component';
import { AnchortagsComponent } from './anchortags/anchortags.component';
import { GridComponent } from './grid/grid.component';
import { PipeComponent } from './pipe/pipe.component';
import { MyPipePipe } from './my-pipe.pipe';
import { MyPipe2Pipe } from './my-pipe2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent, 
    VideocomponentComponent, 
    UsersearchComponent,
    CentercontnetnComponent, 
    AnchortagsComponent,
    GridComponent,   
    PipeComponent, 
    MyPipePipe,
    MyPipe2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
