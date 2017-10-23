import { Article } from './../../../models/article';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { ArticleService } from './../../../services/article.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css'],
  providers: [ArticleService]
})
export class ArticleAddComponent implements OnInit {

  public articleForm: FormGroup
  @Input() code: string
  @Output() add_action = new EventEmitter<string>()
  public article: Article
  public submitted: boolean
  constructor(public fb: FormBuilder, public articleService: ArticleService) {}

  ngOnInit() {
    this.article = new Article()
    this.article.code = this.code
    this.createForm()
  }

  public createForm () {
    this.articleForm = this.fb.group({
      code: [this.article.code, [Validators.required, Validators.pattern(`.*[\\S].*`)]],
      designation: [this.article.designation, [Validators.required, Validators.maxLength(60)]],
      codeABarre: [this.article.codeABarre, [Validators.required,  Validators.maxLength(35)]]
    })
    this.articleForm.valueChanges.subscribe(data => {
      this.onValueChanged(data)
    })

    this.onValueChanged() // (re)set validation messages now
    this.submitted = false
  }

  public onReset () {
    this.add_action.emit('list')
  }

  public pushArticle() {
    this.submitted = false
    const formModel = this.articleForm.value
    const _article = new Article()
    _article.code = formModel.code
    _article.designation = formModel.designation
    _article.codeABarre = formModel.codeABarre
    this.articleService.create(_article).subscribe(data => {
      console.log(`${data}`)
      console.log(`successfully added`)
      this.submitted = true
    })
    this.add_action.emit('list')
  }

  public onValueChanged(data?: any) {
    if (!this.articleForm) {
      return
    }
    const form = this.articleForm
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
 
  formErrors = {
    'code': '',
    'designation': '',
    'codeABarre': '',
    /*'cin': '',
    'gsm': '',
    'gsm2': '',
    'birthyear': ''*/
  }
 
  validationMessages = {
    'code': {
      'required':      'Le Code article est requis.',
      'pattern':       'Le code article ne peut pas être formé que de caractères d\'espacement'
    },
    'designation': {
      'required':      'La Désignation est requise.',
      'maxlength':     'La Désignation ne doit pas dépasser 60 caractères.'
    },
    'codeABarre': {
      'required':      'Le Code à barre est requis.',
      'maxlength':     'Le Code à barre ne doit pas dépasser 35 caractères.'
    },
    /*'cin': {
      'required':      'National ID card number is required.',
      'pattern':       'National ID card number must have 8 digits'
    },
    'gsm': {
      'pattern':       'First Gsm number must have 8 digits'
    },
    'gsm2': {
      'pattern':       'Second Gsm number must have 8 digits'
    },
    'birthyear': {
      'pattern':       'Birth Year must have 4 digits'
    },*/
  }

}
