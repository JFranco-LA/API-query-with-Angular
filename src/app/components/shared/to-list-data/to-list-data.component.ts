import { Component, Input } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-to-list-data',
  templateUrl: './to-list-data.component.html',
  styleUrls: ['./to-list-data.component.css']
})
export class ToListDataComponent {
  @Input('data') arrayColors: any[] = [];


}
