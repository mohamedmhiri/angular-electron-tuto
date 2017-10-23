import { Router } from '@angular/router';
import { AuthState } from './../models/auth-state'
import { Store } from '@ngrx/store'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
    constructor(public store: Store<AuthState>, public router: Router) {}

    public login(username: string, password: string) {
        let currentState = {}
        this.store
            .select(state => state) // select the entire state
            //.take(1)
            .subscribe(state => currentState = state)
        console.log(currentState) // entire state
        this.router.navigateByUrl('/')
    }
    public logout() { 
        let currentState = {}
        this.store
            .select(state => state) // select the entire state
            //.take(1)
            .subscribe(state => currentState = state)
        console.log(currentState) // entire state
        this.router.navigateByUrl('/login')
    }
    public isAuthenticated(): boolean {
        let _state: boolean
        this.store
            .select(state => state) // select the entire state
            //.take(1)
            .subscribe(state => {
                if (state._auth) {
                    _state = true
                } else {
                    _state = false
                }
            })
        return _state    
    }

    public handleAuthentication () {
        if (this.isAuthenticated()) {
            this.router.navigateByUrl('/menu')
        } else {
            this.router.navigateByUrl('/login')
        }
    }

}