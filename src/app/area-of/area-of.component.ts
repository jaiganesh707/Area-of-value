import { Component } from '@angular/core';

@Component({
  selector: 'app-area-of',
  templateUrl: './area-of.component.html',
  styleUrls: ['./area-of.component.css']
})
export class AreaOfComponent {
  col:number=0;
  width:number=0;
  height:number=0;
  side:number=0;
  radius:number=0;
  pi:number=3.14;
  selectedValue:String='';


  calculate(){

    if(this.selectedValue=="add"){
      this.col=(this.height*this.width);
      console.log(this.col);
    }
    else if(this.selectedValue=="sub"){
      this.col=(this.side*this.side);
      console.log(this.col);
    }
    else if(this.selectedValue=="mul"){
      this.col=(this.radius*this.radius*3.14);
      console.log(this.col);
    }
    
    
    console.log((this.height)*(this.width));
  }



  getSelectedValue(event:any){
    this.selectedValue=event.target.value;  
    console.log(this.selectedValue);
  }
 

}
