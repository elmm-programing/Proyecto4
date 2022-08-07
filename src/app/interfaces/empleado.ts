export interface Empleado {
  idEmpleado?: string;
  Nombre: string;
  Apellido: string;
  Cedula: string;
  Direccion: string;
  Nacionalidad: string;
  Telefono: number;
  EstadoCivil: string;
  Sexo: string;
  FechaNacimiento: string;
  idTipoEmpleado?: number;
  Salario: number;
  HorasSalario: number;
  ImagenUrl?: any;
  idDepartamento?: number;
  idRoll?: number;
  idHorario?: number;
}
