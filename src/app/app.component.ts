import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ModalService } from './shared/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  modal$: Observable<HTMLElement | null>  = of(null)

  constructor(private modalService: ModalService){

  }

  ngOnInit(): void {
  this.modal$ = this.modalService.modal$
  }
}
