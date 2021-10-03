import { HttpParams } from '@angular/common/http';
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
  pageSize = 10;
  pageSizes = [10, 20, 30];

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    let params = new HttpParams()
    .set('sort', 'name');
  
    this.getPokemonList(params);
  }

  getPokemonList(params: any){
    this.demoService.getData().subscribe(data =>{
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

 filterItem(value: any){
   debugger;
    if(!value){
        return;
    } 
    let params = new HttpParams()
    .set('sort', 'name');
  
    this.getPokemonList(params);
 }

 handlePageSizeChange(event: any): void {
  this.pageSize = event.target.value;
 
}

}
