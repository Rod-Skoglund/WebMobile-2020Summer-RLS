import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {visitValue} from "@angular/compiler/src/util";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup;
  isbn = '';
  title = '';
  description = '';
  author = '';
  publisher = '';
  published_year = '';

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }
    // private ro ute: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      isbn: [this.isbn, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      author: [null, Validators.required],
      publisher: [null, Validators.required],
      published_year: [null, Validators.required]
    });
    this.getBook(this.route.snapshot.params.id);
  }

  onFormSubmit(form: NgForm) {
    this.api.updateBook(this.route.snapshot.params.id, form).subscribe(res => {
      let id = res['_id'];
      this.router.navigate(['/book-details', id]);
    }, (err) => {
      console.log(err);
    });

  }

  getBook(id) {
    this.api.getBook(id).subscribe(data => {
        this.bookForm.setValue({
          isbn: data.isbn,
          title: data.title,
          description: data.description,
          author: data.author,
          publisher: data.publisher,
          published_year: data.published_year
        });
        // console.log(data);
        // this.book = data;
      });
  }


}
