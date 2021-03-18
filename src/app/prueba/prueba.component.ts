import { Component, OnInit } from '@angular/core';
import { InfoJSONService} from '../services/info-json.service';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  users:any=null;
  constructor(private infoJson:InfoJSONService) { 
  }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(){
    this.infoJson.getUsers().subscribe(res =>{
      this.users=res;
      this.forUser();
    });
  }

  forUser(){
    for (let user of this.users){
      console.log(user.email);
    }
  }

}
