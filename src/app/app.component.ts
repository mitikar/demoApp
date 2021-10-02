import { Component, OnInit } from '@angular/core';
import {DemoService} from '../app/services/demo.service';

interface User {
  name: string;
  height: string;
  width: string;
  image: any;
  abilities: [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'demo';
  public pokemonList: any=[];
  public list: any=[];
  public details: any=[];
  

  constructor(private demoService: DemoService) { }

  ngOnInit() {

    this.demoService.getData().subscribe(data =>{
      debugger;
      this.pokemonList = data;
      this.list = this.pokemonList.results;
      for(let i =0; i<= this.list.length; i++){
        let url = this.pokemonList.results[i].url;
        this.demoService.getDetails(url).subscribe(d => {
          this.list[i].details = d;
        })
      }
    })  
  }

}
