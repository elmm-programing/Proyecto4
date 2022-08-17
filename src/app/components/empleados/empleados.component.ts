import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Departamentos } from 'src/app/interfaces/departamentos';
import { Empleado } from 'src/app/interfaces/empleado';
import { Horarios } from 'src/app/interfaces/horarios';
import { Rolles } from 'src/app/interfaces/rolles';
import { TiposEmpleados } from 'src/app/interfaces/tiposEmpleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
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
  UpdateEmpleadosForm: FormGroup = new FormGroup({
    id: new FormControl(''),
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

  TiposDeEmpleados: Observable<TiposEmpleados[]>;
  TiposDeDepartamentos: Observable<Departamentos[]>;
  Horarios: Observable<Horarios[]>;
  Rolles: Observable<Rolles[]>;
  Empleados: Observable<Empleado[]> | undefined;
  showModalUpdate = false;
  showModalAdd = false;
  constructor(private service: EmpleadosService) {
    this.TiposDeEmpleados = service.getTipoEmpleados();
    this.TiposDeDepartamentos = service.getTipoDepartamentos();
    this.Horarios = service.getHorarios();
    this.Rolles = service.getRoles();
    this.Empleados = service.getEmployees();
  }
  toggleModalUpdate() {
    this.showModalUpdate = !this.showModalUpdate;
  }
  toggleModalAdd() {
    this.showModalAdd = !this.showModalAdd;
  }
  /**
   * DeleteEmploy
   */
  public DeleteEmploy(id: string | undefined) {
    console.log(id);
    if (id) {
      this.service.deleteEmploy(id).forEach((val) => {
        console.log(val);
      });
      this.refreshEmpleados();
    }
  }
  refreshEmpleados() {
    this.Empleados = of([]);
    setTimeout(() => {
      this.Empleados = this.service.getEmployees();
    }, 1000);
  }

  CreateEmploy(form: FormGroup) {
    if (
      form.value.Nombre &&
      form.value.Apellido &&
      form.value.Cedula &&
      form.value.Direccion &&
      form.value.Nacionalidad &&
      form.value.Telefono &&
      form.value.EstadoCivil &&
      form.value.Sexo &&
      form.value.FechaNacimiento &&
      form.value.idTipoEmpleado &&
      form.value.Salario &&
      form.value.HorasSalario &&
      form.value.idDepartamento &&
      form.value.idRoll &&
      form.value.idHorario
    ) {
      let employ: Empleado = {
        nombre: form.value.Nombre,
        apellido: form.value.Apellido,
        cedula: form.value.Cedula,
        direccion: form.value.Direccion,
        nacionalidad: form.value.Nacionalidad,
        telefono: form.value.Telefono.toString(),
        estadoCivil: form.value.EstadoCivil,
        sexo: form.value.Sexo,
        fechaNacimiento: form.value.FechaNacimiento,
        idTipoEmpleado: Number(form.value.idTipoEmpleado),
        salario: form.value.Salario,
        horasSalario: Number(form.value.HorasSalario),
        imagenUrl: 'string',
        idDepartamento: Number(form.value.idDepartamento),
        idRoll: Number(form.value.idRoll),
        idHorario: Number(form.value.idHorario),
      };
      this.service.createEmployee(employ).forEach((val) => {
        console.log(val);
      });

      this.refreshEmpleados();
    } else {
      alert('Complete all information');
    }
  }
  UpdateEmploy(form: FormGroup) {
    if (
      form.value.Nombre &&
      form.value.Apellido &&
      form.value.Cedula &&
      form.value.Direccion &&
      form.value.Nacionalidad &&
      form.value.Telefono &&
      form.value.EstadoCivil &&
      form.value.Sexo &&
      form.value.FechaNacimiento &&
      form.value.idTipoEmpleado &&
      form.value.Salario &&
      form.value.HorasSalario &&
      form.value.idDepartamento &&
      form.value.idRoll &&
      form.value.idHorario
    ) {
      let employ: Empleado = {
        idEmpleado: form.value.id,
        nombre: form.value.Nombre,
        apellido: form.value.Apellido,
        cedula: form.value.Cedula,
        direccion: form.value.Direccion,
        nacionalidad: form.value.Nacionalidad,
        telefono: form.value.Telefono.toString(),
        estadoCivil: form.value.EstadoCivil,
        sexo: form.value.Sexo,
        fechaNacimiento: form.value.FechaNacimiento,
        idTipoEmpleado: Number(form.value.idTipoEmpleado),
        salario: form.value.Salario,
        horasSalario: Number(form.value.HorasSalario),
        imagenUrl: 'string',
        idDepartamento: Number(form.value.idDepartamento),
        idRoll: Number(form.value.idRoll),
        idHorario: Number(form.value.idHorario),
      };
      this.service.updateEmployee(form.value.id, employ).forEach((val) => {
        console.log(val);
      });

      this.refreshEmpleados();
    } else {
      alert('Complete all information');
    }
  }
  fillUpdateEmpleadosForm(empleado: Empleado) {
    this.UpdateEmpleadosForm.patchValue({
      id: empleado.idEmpleado,
      Nombre: empleado.nombre,
      Apellido: empleado.apellido,
      Cedula: empleado.cedula,
      Direccion: empleado.direccion,
      Nacionalidad: empleado.nacionalidad,
      Telefono: empleado.telefono,
      EstadoCivil: empleado.estadoCivil,
      Sexo: empleado.sexo,
      FechaNacimiento: this.formatDate(new Date(empleado.fechaNacimiento)),
      idTipoEmpleado: empleado.idTipoEmpleado,
      Salario: empleado.salario,
      HorasSalario: empleado.horasSalario,
      ImagenUrl: empleado.imagenUrl,
      idDepartamento: empleado.idDepartamento,
      idRoll: empleado.idRoll,
      idHorario: empleado.idHorario,
    });
  }
  private formatDate(date: Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  ngOnInit(): void {}
}
