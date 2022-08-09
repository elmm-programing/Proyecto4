import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamentos } from '../interfaces/departamentos';
import { Empleado } from '../interfaces/empleado';
import { Horarios } from '../interfaces/horarios';
import { Rolles } from '../interfaces/rolles';
import { TiposEmpleados } from '../interfaces/tiposEmpleados';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor(private http: HttpClient) {}
  /**
   * createEmployee
   */
  public createEmployee(emp: Empleado) {
    return this.http.post('http://45.35.64.173:9095/api/Empleados', emp);
  }
  /**
   * getTipoEmpleados
   */
  public getTipoEmpleados(): Observable<TiposEmpleados[]> {
    return this.http.get<TiposEmpleados[]>(
      'http://45.35.64.173:9095/api/TipoEmpleados'
    );
  }
  /**
   * getTipoDepartamentos
   */
  public getTipoDepartamentos(): Observable<Departamentos[]> {
    return this.http.get<Departamentos[]>(
      'http://45.35.64.173:9095/api/Departamentos'
    );
  }
  /**
   * getHorarios
   */
  public getHorarios(): Observable<Horarios[]> {
    return this.http.get<Horarios[]>('http://45.35.64.173:9095/api/Horarios');
  }
  /**
   * getRoles
   */
  public getRoles(): Observable<Rolles[]> {
    return this.http.get<Rolles[]>('http://45.35.64.173:9095/api/Rolles');
  }
  /**
   * getEmployees
   */
  public getEmployees(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://45.35.64.173:9095/api/Usuarios');
  }
}
