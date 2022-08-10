import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Router } from '@angular/router';

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
  constructor(private service: EmpleadosService, private route: Router) {}

  LoginEmploy(form: FormGroup) {
    if (form.valid) {
      this.service.getUsers(form.value.email, form.value.password).subscribe(
        (res) => {
          this.route.navigate(['/main']);
        },
        (err) => alert('El usuario o la contraseña estan mal')
      );
    } else {
      alert('Complete all information');
    }
  }
  ngOnInit(): void {}
}
