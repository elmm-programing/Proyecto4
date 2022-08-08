import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado';
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
   * getEmployees
   */
  public getEmployees(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://45.35.64.173:9095/api/Usuarios');
  }
}
