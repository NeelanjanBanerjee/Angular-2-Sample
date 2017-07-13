import { Component } from '@angular/core'


@Component ( {
  selector: 'nav-component',
  templateUrl: './navbar.component.html'
})

export class NavComponent {

  appTitle: string = 'Welcome'; 
}