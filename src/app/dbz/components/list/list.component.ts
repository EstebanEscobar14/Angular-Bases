import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html',

})
export class ListComponent {
  //Enviar del padre al hijo
  @Input()
  //Valor por defecto
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 900
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
 }
