import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-private-template',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './private-template.html',
  styleUrl: './private-template.scss',
})
export class PrivateTemplate {
logoff() {
throw new Error('Method not implemented.');
}

}
