import { mainViewComponent } from "./views/main-view/main-view.component";
import { minorViewComponent } from "./views/minor-view/minor-view.component";

import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      // Main redirect
      { path: '', redirectTo: 'mainView', pathMatch: 'full' },

      // App views
      { path: 'mainView', component: mainViewComponent },
      { path: 'minorView', component: minorViewComponent },

      // Handle all other routes
      { path: '**', component: mainViewComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
