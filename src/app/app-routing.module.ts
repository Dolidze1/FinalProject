import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnchortagsComponent } from './anchortags/anchortags.component';
import { CentercontnetnComponent } from './centercontnetn/centercontnetn.component';
import { GridComponent } from './grid/grid.component';
import { PipeComponent } from './pipe/pipe.component';
import { UsersComponent } from './users/users.component';
import { VideocomponentComponent } from './videocomponent/videocomponent.component';

const routes: Routes = [
{path:'users', component: UsersComponent},
{path:'video', component: VideocomponentComponent},
{path:'center', component: CentercontnetnComponent},
{path:'anchor', component: AnchortagsComponent},
{path:'grid', component: GridComponent},
{path:'pipe', component: PipeComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
