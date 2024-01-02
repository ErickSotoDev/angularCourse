import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/charachter.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListComponent {

  @Input('prueba')
  public characterList:Character[]=[{id:uuid(),name:'trunks',power:6000}]

  @Output('onDeleteIdEmitter')
  public onDeleteId:EventEmitter<string>=new EventEmitter();

  onDeleteCharacter(index:string){
    console.log(index);
    this.onDeleteId.emit(index);
  }

}
