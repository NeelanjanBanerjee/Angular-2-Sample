import { Component } from '@angular/core'

import { EventService } from './event.service'

@Component ( {
  selector: 'event-details',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent {

  appTitle: string = 'Welcome'; 
}