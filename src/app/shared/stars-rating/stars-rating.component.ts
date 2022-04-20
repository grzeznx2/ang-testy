import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss']
})
export class StarsRatingComponent implements OnInit{
  @Input() rate = 3
  @Input() maxRate = 5
  @Input() readonly = false
  @Input() size = 5
  @Output() starSelected = new EventEmitter<number>()
  public rateClicked = false
  public stars!: Array<number>

  ngOnInit(): void {
    this.stars = Array.from({length: this.maxRate}).map((_,i)=>i+1)
  }

  onClick(number: number){
    if(this.readonly) return
    this.rateClicked = true
    this.starSelected.emit(number)
  }

  onMouseEnter(number: number){
    if(this.readonly) return
    if(this.rateClicked) return
    this.starSelected.emit(number)
  }
}
