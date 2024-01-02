import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/charachter.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }
  public characters:Character[]=[{
    id:uuid(),
    name:'Krilin',
    power:500
  },{
    id:uuid(),
    name:'Goku',
    power:10000
  }]

  onNewCharacter(character:Character):void{
    const newCharacter:Character={
      ...character,id:uuid()
    }
    this.characters.push(character);


  }
  onDeleteCharacter(index:number):void{
    this.characters.splice(index,1);
  }
  deleteCharacterById(id:string){
    this.characters=this.characters.filter(character=>character.id !== id);

  }
}
