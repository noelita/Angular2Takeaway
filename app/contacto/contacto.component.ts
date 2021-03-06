import { Component, OnInit } from '@angular/core';
import {takeAwayService} from "../takeaway.service";
import {Contacto} from "../model/contacto";
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers:[takeAwayService]
})
export class ContactoComponent implements OnInit {

  constructor(private _service:takeAwayService) { }

  ngOnInit() {
  }

  onSubmit(form:any){
  	console.log(form);
  	this._service.addContact(form).subscribe(
          result => {
            if (result.status=="success"){
             console.log("Contacto recibido");
            }
            else {
              alert("Error petición Mysql");
            }
          },
          error =>{
            alert('Error al enviar contacto');
          }
        )
  }

}
