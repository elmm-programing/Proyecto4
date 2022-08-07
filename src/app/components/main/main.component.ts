import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  myRegistrarEmpleadosForm: FormGroup = new FormGroup({
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    Cedula: new FormControl(''),
    Direccion: new FormControl(''),
    Nacionalidad: new FormControl(''),
    Telefono: new FormControl(),
    EstadoCivil: new FormControl(''),
    Sexo: new FormControl(''),
    FechaNacimiento: new FormControl(''),
    idTipoEmpleado: new FormControl(),
    Salario: new FormControl(),
    HorasSalario: new FormControl(''),
    ImagenUrl: new FormControl(''),
    idDepartamento: new FormControl(),
    idRoll: new FormControl(),
    idHorario: new FormControl(),
  });

  constructor(private service: EmpleadosService) {}

  CreateEmploy(form: FormGroup) {
    if (form.valid) {
      console.log(form.value.Nombre);
      console.log(form.value.Apellido);
      console.log(form.value.Cedula);
      console.log(form.value.Direccion);
      console.log(form.value.Nacionalidad);
      console.log(form.value.Telefono);
      console.log(form.value.EstadoCivil);
      console.log(form.value.Sexo);
      console.log(form.value.FechaNacimiento);
      console.log(form.value.Salario);
      console.log(form.value.HorasSalario);

      let employ: Empleado = {
        Nombre: form.value.Nombre,
        Apellido: form.value.Apellido,
        Cedula: form.value.Cedula,
        Direccion: form.value.Direccion,
        Nacionalidad: form.value.Nacionalidad,
        Telefono: form.value.Telefono,
        EstadoCivil: form.value.EstadoCivil,
        Sexo: form.value.Sexo,
        FechaNacimiento: form.value.FechaNacimiento,
        Salario: form.value.Salario,
        HorasSalario: form.value.HorasSalario,
      };
      this.service.createEmployee(employ);
    } else {
      console.log(form.value.Nombre);
      console.log(form.value.Apellido);
      console.log(form.value.Cedula);
      console.log(form.value.Direccion);
      console.log(form.value.Nacionalidad);
      console.log(form.value.Telefono);
      console.log(form.value.EstadoCivil);
      console.log(form.value.Sexo);
      console.log(form.value.FechaNacimiento);
      console.log(form.value.Salario);
      console.log(form.value.HorasSalario);
      alert('Complete all information');
    }
  }
  ngOnInit(): void {}
}
