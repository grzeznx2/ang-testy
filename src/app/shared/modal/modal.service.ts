import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
modal = new ReplaySubject<HTMLElement | null>(1)

  get modal$(){
    return this.modal.asObservable()
  }

  createModal(content: HTMLElement){
    this.modal.next(content)
    console.log(content)
  }

  closeModal(){
    this.modal.next(null)
  }
}
