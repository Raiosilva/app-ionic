import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public nameUser:string = "Raimundo Oliveira";

  constructor() { }

  public addTwoNumber(num1:number, num2:number): void{
    // alert(num1 + num2);
  }

  ngOnInit() {
    // this.addTwoNumber(10, 99);
  }


}
