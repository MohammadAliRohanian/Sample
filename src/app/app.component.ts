import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample';

  inputText:any="";

    check(){
      if(this.inputText == "()"){
        alert("This Text is VALID :)");
      }

      else if(this.inputText == "[]"){
        alert("This Text is VALID :)");
      }

      else if(this.inputText == "{}"){
        alert("This Text is VALID :)");
      }

      else if(this.inputText == ""){
        alert("Please Enter Your Value :|");
      }

      else{
        alert("This Text is Not VALID :(");
      }

      this.inputText="";
    }
}
