import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {IUser} from '../model/user.model'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  error:boolean = false;

  userProfile:IUser;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private authSer:AuthService) {
    
  }
  
   signOff(formValues) {
     console.log('sign off :: formValues :: userName :: ' + formValues.userName)
     console.log('sign off :: formValues :: password :: ' + formValues.password)

     if ( this.authSer.authenticateUser ( formValues.userName, formValues.password )) {
        this.router.navigate(['/dashboard'])
     }
  }


}
