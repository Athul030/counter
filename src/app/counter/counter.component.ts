import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter:number = 0;

  increaseCount(){

    
    for(let i=1;i<=10;i++){
      this.counter= this.counter+1;
    }


  }

  decreaseCount(){
   
    if(this.counter>9){
      for(let i=1;i<=10;i++){
        this.counter= this.counter-1;
      }
    }
  
  }
}
