import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Article } from './../../../models/article';
import { ArticleService } from './../../../services/article.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css'],
  providers: [ArticleService]
})
export class ArticleUpdateComponent implements OnInit {

  public articleForm: FormGroup
  public submitted: boolean
  @Input() article: Article
  @Output() update_action = new EventEmitter<string>()
  constructor(public fb: FormBuilder, public articleService: ArticleService) { }

  ngOnInit() {
    this.createForm()
  }

  public createForm () {
    this.articleForm = this.fb.group({
      code: [this.article.code, [Validators.required, Validators.pattern(`.*[\\S].*`)]],
      designation: [this.article.designation, [Validators.required, Validators.maxLength(60)]],
      codeABarre: [this.article.codeABarre, [Validators.required, Validators.maxLength(35)]]
    })
    this.articleForm.valueChanges.subscribe(data => {
      this.onValueChanged(data)
    })

    this.onValueChanged() // (re)set validation messages now
    this.submitted = false
  }

  public onReset () {
    this.update_action.emit('list')
  }

  public updateArticle () {
    this.submitted = false
    const formModel = this.articleForm.value
    console.log(formModel)
    this.article.code = formModel.code
    this.article.designation = formModel.designation
    this.article.codeABarre = formModel.codeABarre
    this.articleService.update(this.article).subscribe(data => {
      console.log(`${data}`)
      console.log(`successfully updated`)
      this.submitted = true
    })
  }

  public deleteArticle () {
    this.update_action.emit('del')
  }

  public onValueChanged (data?: any) {
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
  }

  validationMessages = {
    'code': {
      'required': 'Le Code article est requis.',
      'pattern': 'Le code article ne peut pas être formé que de caractères d\'espacement'
    },
    'designation': {
      'required': 'La Désignation est requise.',
      'maxlength': 'La Désignation ne doit pas dépasser 60 caractères.'
    },
    'codeABarre': {
      'required': 'Le Code à barre est requis.',
      'maxlength': 'Le Code à barre ne doit pas dépasser 35 caractères.'
    },
  }

}
