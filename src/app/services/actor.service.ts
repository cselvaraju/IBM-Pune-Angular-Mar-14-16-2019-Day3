import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorList: Actor[];

  constructor() {
    this.actorList = [
      { name: 'Ammitabh Bachhan', rating: 9.5 },
      { name: 'Kamal Hasan', rating: 7.6 },
      { name: 'Aishwarya Rai Bachhan', rating: 8.0 },
      { name: 'Kajol', rating: 7.4 },
      { name: 'Rajnikant', rating: 9.9 }
    ];
  }

  getActorList() {
    return this.actorList;
  }

  addActor(actor: Actor) {
    this.actorList.push(actor);
  }

  deleteActor(index: number) {
    this.actorList.splice(index, 1);
  }

  updateActor(index: number, actor: Actor) {
    this.actorList.splice(index, 1, actor);
  }
}
