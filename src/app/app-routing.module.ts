import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'newfeed/:uid', loadChildren: './newfeed/newfeed.module#NewfeedPageModule' },
  { path: 'chats/:uid', loadChildren: './chats/chats.module#ChatsPageModule' },
  { path: 'searchusers/:uid', loadChildren: './searchusers/searchusers.module#SearchusersPageModule' },
  { path: 'contactchat/:uid', loadChildren: './contactchat/contactchat.module#ContactchatPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
