import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog.model';

@Component({
    selector: 'app-add-blog',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './add-blog.component.html',
    styleUrl: './add-blog.component.css'
})
export class AddBlogComponent implements OnInit {
    blogForm: FormGroup;

    constructor(private blogService: BlogService, private router: Router) {
        this.blogForm = new FormGroup({
            title: new FormControl('', Validators.required),
            author: new FormControl('', Validators.required),
            content: new FormControl('', Validators.required)
        });
    }

    ngOnInit(): void { }

    onSubmit(): void {
        if (this.blogForm.valid) {
            const newBlog: Blog = {
                id: Date.now(),
                title: this.blogForm.value.title,
                author: this.blogForm.value.author,
                content: this.blogForm.value.content,
                createdAt: new Date().toISOString().split('T')[0]
            };

            this.blogService.addBlog(newBlog).subscribe(
                () => {
                    this.router.navigate(['/']);
                }
            );
        }
    }
}
