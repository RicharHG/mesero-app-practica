import { Plato } from './../_model/plato';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private afs : AngularFirestore) { 

  }
  listar(){
    return this.afs.collection<Plato>('platos').valueChanges();
  }
}
