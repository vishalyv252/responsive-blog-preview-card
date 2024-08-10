import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {

  // Status code for the not-found page (typically 404)
  status_code : number = 404;

  // Description of the status code (error message)
  status_code_description : string = "Sorry, we couldn't find this page";

  // Text for the button that redirects to the home page
  button_name : string = "Back to Home Page";

}
