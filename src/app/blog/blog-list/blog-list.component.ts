import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';

@Component({
    selector: 'app-blog-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './blog-list.component.html',
    styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
    blogs: Blog[] = [];

    constructor(private blogService: BlogService, private router: Router, private crf: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.loadBlogs();

    }

    loadBlogs(): void {
        this.blogService.getAllBlogs().subscribe(
            (data) => {
                this.blogs = data;
                this.crf.detectChanges();
            }
        );
    }

    viewBlog(id: number): void {
        this.router.navigate(['/blog', id]);
    }

    deleteBlog(id: number): void {
        this.blogService.deleteBlog(id).subscribe(
            () => {
                this.loadBlogs();
            }
        );
    }

    addNewBlog(): void {
        this.router.navigate(['/add-blog']);
    }
}
