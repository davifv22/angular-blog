import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentIdComponent } from './pages/contentId/contentId.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path:'content',
  component: ContentComponent
},
{
  path:'content/:id',
  component: ContentIdComponent
}
];
