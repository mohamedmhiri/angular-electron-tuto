import { LOGGINGIN, LOGGINGOUT } from './../../reducers/auth';
import { Store } from '@ngrx/store';
import { AuthState } from './../../models/auth-state';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../services/auth.service';
import { Login } from './../../models/login';
// import { Signup } from './../../models/signup';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public authentication: Observable<boolean>
  public loginForm: FormGroup
  // public signUpForm: FormGroup
  public login: Login
  public buttonMode: string
  // public signUp: Signup
  constructor(public fb: FormBuilder, public auth: AuthService, public store: Store<AuthState>) { 
    this.authentication = store.select('_auth')
  }

  ngOnInit() {
    this.login = new Login()
    this.buttonMode = 'btn btn-primary: disabled'
    // this.signUp = new Signup()
    this.createForm()
  }

  ngDoCheck() {
    this.buttonMode = this.formTest()
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [this.login.username, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      password: [this.login.password, Validators.required],
    })
    /*this.signUpForm = this.fb.group({
      firstName: [this.signUp.firstName, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      lastName: [this.signUp.lastName, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      username: [this.signUp.username, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      password: [this.signUp.password, Validators.required],
      tel: [this.signUp.tel, [Validators.pattern(`^[0-9]{8}`)]]
    })*/
    this.loginForm.valueChanges.subscribe(data => {
      this.onValueChanged(data)
    })

    this.onValueChanged() // (re)set validation messages now
  }
  validateLogin() {
    const formModel = this.loginForm.value
    console.log(formModel)
    this.store.dispatch({type: LOGGINGIN})
    this.auth.login(formModel.username, formModel.password)
  }

  /*validateSignup() {
    const formModel = this.signUpForm.value
    this.auth.signup(formModel.username, formModel.password)
  }*/

  logout() {
    this.store.dispatch({type: LOGGINGOUT})
    this.auth.logout()
  }

  formErrors = {
    'username': '',
    'password': '',
  }
 
  validationMessages = {
    'username': {
      'required':      'Nom d\'utilisateur requis.',
      'minlength':     'Nom d\'utilisateur doit être formé au moins de 2 caractères.',
      'maxlength':     'Nom d\'utilisateur ne peut pas dépasser 24 caractères.'
    },
    'password': {
      'required':      'Mot de passe requis.'
    }
  }

  public onValueChanged(data?: any) {
    if (!this.loginForm) {
      return
    }
    const form = this.loginForm
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

  public formTest (): string {
    if (this.loginForm.pristine) {
      return 'btn btn-primary: disabled'
    } else {
      if ( (this.formErrors.username === '') && (this.formErrors.password === '') && (this.loginForm.value.username) && (this.loginForm.value.password) ) {
        return 'btn btn-primary'
      } else {
        return 'btn btn-primary: disabled'
      }
    }
  }

}
