import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPreviewCardPageComponent } from './components/blog-preview-card-page/blog-preview-card-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [

  // Default route that loads the 'Blog Preview Page' component.
  { path: '', component: BlogPreviewCardPageComponent },

  // Wildcard route that catches all undefined routes and loads the 'Not Found Page' component.
  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
