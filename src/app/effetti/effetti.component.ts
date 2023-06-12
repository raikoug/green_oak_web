import { Component, Input } from '@angular/core';
import { effetto } from '../effetti';
@Component({
  selector: 'app-effetti',
  templateUrl: './effetti.component.html',
  styleUrls: ['./effetti.component.css']
})
export class EffettiComponent {
  @Input() effetti: effetto[] = [];
  
} 
