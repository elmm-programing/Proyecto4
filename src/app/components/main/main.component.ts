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
      let employ: Empleado = {
        nombre: form.value.Nombre,
        apellido: form.value.Apellido,
        cedula: form.value.Cedula,
        direccion: form.value.Direccion,
        nacionalidad: form.value.Nacionalidad,
        telefono: form.value.Telefono,
        estadoCivil: form.value.EstadoCivil,
        sexo: form.value.Sexo,
        fechaNacimiento: form.value.FechaNacimiento,
        idTipoEmpleado: 1,
        salario: form.value.Salario,
        horasSalario: Number(form.value.HorasSalario),
        imagenUrl: 'string',
        idDepartamento: 1,
        idRoll: 1,
        idHorario: 1,
      };
      console.log(form.value.Salario);
      console.log(form.value.HorasSalario);
      this.service.createEmployee(employ).forEach((val) => {
        console.log(val);
      });
    } else {
      // console.log(form.value.Nombre);
      // console.log(form.value.Apellido);
      // console.log(form.value.Cedula);
      // console.log(form.value.Direccion);
      // console.log(form.value.Nacionalidad);
      // console.log(form.value.Telefono);
      // console.log(form.value.EstadoCivil);
      // console.log(form.value.Sexo);
      // console.log(form.value.FechaNacimiento);
      // console.log(form.value.Salario);
      // console.log(form.value.HorasSalario);
      alert('Complete all information');
    }
  }
  ngOnInit(): void {}
}
