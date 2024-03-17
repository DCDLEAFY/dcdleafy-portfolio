import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FolioNavContainerComponent } from './core/components/folio-nav-container/folio-nav-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FolioNavContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
