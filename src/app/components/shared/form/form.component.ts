import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: string = '';
  createdAt: string = '';
  users: any = [];

  constructor(private configServ: ConfigService) { }

  name = new FormControl('');
  anio = new FormControl('');
  color = new FormControl('000000');

  ngOnInit() {
    this.listar();
  }

  guardar() {
    const nombre: any = this.name.value
    const anio: any = this.anio.value
    const color: any = this.color.value

    this.configServ.newUser(nombre, anio, color).subscribe((response: any) => {
      this.id = response.id;
      this.createdAt = response.createdAt
    })
  }

  listar() {
    this.configServ.getUsers().subscribe((users) => {
      this.users = users;
      this.users = this.users.data;
      console.log(this.users);
    });

  }

  enviarData() {
    this.guardar();

    this.users.push({ id: this.id, name: this.name.value, year: this.anio.value, color: this.color.value });
    console.log(this.users)

  }



}
