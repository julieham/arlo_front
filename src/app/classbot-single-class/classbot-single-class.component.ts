import {Input, OnInit} from '@angular/core';
import {Classe} from '../types/classbot';

export abstract class ClassbotSingleClassComponent implements OnInit {

  @Input() classe: Classe;
  @Input() user: string;

  constructor() {
  }

  ngOnInit() {
  }

}
