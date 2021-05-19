import { Component, OnInit } from '@angular/core';
import {ITEMS} from './mockPictures';
import { Picture } from './picture';
@Component({
  selector: 'app-pictures',
  template: `
            <ul class="items">
            <img [ngStyle]="{'width':'300px','height':'auto'}" *ngFor="let item of items" [attr.src]='item.photo'
            (click)="onSelect(item)"
            [class.selected]="item === selectedItem">
            </ul>
            <div *ngIf="selectedItem&&isVisible">
              <img [attr.src]='selectedItem.photo' [ngStyle]="{'maxWidth':'1000px','height':'auto'}">
              <p>Title: {{selectedItem.title}}</p>
              <p>Author: {{selectedItem.author}}</p>
              <p>Year: {{selectedItem.year}}</p>
              <p>Size: {{selectedItem.size}}</p>
              <p>Location: {{selectedItem.location}}</p>
            </div>
           `,
  styles: ['.visible{display:block}']
})
export class PicturesComponent implements OnInit {

  items = ITEMS;
  isVisible=false;
  selectedItem: Picture= new Picture()

  openClasses={
    visible:this.isVisible
}


  onSelect(item: Picture): void {
  this.selectedItem = item;
  this.isVisible=true;
  }

  constructor() { }

  ngOnInit(): void {

  }
}
