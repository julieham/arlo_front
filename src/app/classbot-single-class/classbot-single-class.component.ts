import {Component, Input, OnInit} from '@angular/core';
import {Classe} from '../types/classbot';

@Component({
  selector: 'app-classbot-single-class',
  templateUrl: './classbot-single-class.component.html',
  styleUrls: ['./classbot-single-class.component.scss']
})
export class ClassbotSingleClassComponent implements OnInit {

  @Input() classe: Classe;
  @Input() user: string;

  constructor() {
  }

  ngOnInit() {
  }

}
