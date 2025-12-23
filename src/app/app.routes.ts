import { Routes } from '@angular/router';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';

export const routes: Routes = [
    { path: '', component: BlogListComponent },
    { path: 'blog/:id', component: BlogDetailComponent },
    { path: 'add-blog', component: AddBlogComponent }
];
