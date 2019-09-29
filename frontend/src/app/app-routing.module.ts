import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { BrowserComponent }   from './browser/browser.component';
import { EditorComponent }     from './editor/editor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const appRoutes: Routes = [
  { path: 'browser', component: BrowserComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: '',   redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}