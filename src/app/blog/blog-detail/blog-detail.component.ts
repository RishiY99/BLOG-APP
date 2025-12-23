import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';

@Component({
    selector: 'app-blog-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './blog-detail.component.html',
    styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
    blog: Blog | null = null;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.loadBlog(id);
    }

    loadBlog(id: number): void {
        this.blogService.getBlogById(id).subscribe(
            (data) => {
                this.blog = data;
            }
        );
    }

    goBack(): void {
        this.router.navigate(['/']);
    }
}
