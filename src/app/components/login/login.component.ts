import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myLoginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private service: EmpleadosService) {}

  LoginEmploy(form: FormGroup) {
    if (form.valid) {
      this.service.getEmployees().forEach((val) => {
        val.forEach((value) => {
          if (
            value.email == form.value.email &&
            value.contraseña == form.value.password
          ) {
            console.log('Es igual');
          } else {
            console.log('Es diferente');
          }
        });
      });
    } else {
      alert('Complete all information');
    }
  }
  ngOnInit(): void {}
}
