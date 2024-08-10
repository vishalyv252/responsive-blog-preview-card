import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blog-preview-card-page',
  templateUrl: './blog-preview-card-page.component.html',
  styleUrls: ['./blog-preview-card-page.component.css'],
  providers: [DatePipe], // Provides DatePipe service for date formatting.
  encapsulation: ViewEncapsulation.None // Ensures that styles are not encapsulated and can affect global styles.
})
export class BlogPreviewCardPageComponent {

  // Path to the illustration image
  illustraion_image_path_link : string = "images/illustration-article.svg";
  // Alternative text for the illustration image
  illustration_image_description : string = "I have attached Illustration image.";

  // Blog type (e.g., "Learning")
  blog_type_name : string = "Learning";

  // Status of the blog (e.g., "published")
  is_publish : string = "published";

  // Date of publication, formatted as 'dd MMM yyyy'
  specificDate = new Date(2023, 11, 21); // December 21, 2023
  formattedDate: string;
  constructor(private datePipe: DatePipe) {
    this.formattedDate = this.datePipe.transform(this.specificDate, 'dd MMM yyyy')!;
  }

  // Title of the blog
  title : string = "HTML & CSS foundations";

  // Boolean to manage hover effect
  hovering_text : boolean = false;
  hover_text() {
    this.hovering_text = !this.hovering_text; // Toggle hover effect
  }

  // Description of the blog
  description : string = "These languages are the backbone of every website, defining structure, content, and presentation.";

  // Path to the author's avatar image
  avatar_image_path_link : string = "images/image-avatar.webp";
  // Alt text for the avatar image
  avatar_image_description : string = "I have attached Grey hooper's avatar image.";

  // Author's full name
  avatar_first_name : string = "Greg";
  avatar_last_name : string = "Hooper";
  avatar_full_name : string = this.avatar_first_name + " " + this.avatar_last_name;

}
