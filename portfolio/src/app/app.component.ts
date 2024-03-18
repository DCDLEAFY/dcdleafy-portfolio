import { Component } from '@angular/core';
import { FolioContainerComponent } from './core/components/folio-container/folio-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FolioContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
