import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-folio-container',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink
  ],
  templateUrl: './folio-container.component.html',
  styleUrl: './folio-container.component.scss'
})
export class FolioContainerComponent {

}
