export interface Menudeo {
  id: number;
  cedula: string;
  nombre: string;
  montoAComprar: number;
  tasaCambio: number;
  montoContraValor: number;
  montoEnBolivares: number;
  moneda: string;
  fechaCreacion: Date;
  fechaNotificacion?: Date;
  estatusNotificacion: string;
  auditoriaModificacion: boolean;
  idOC: number;
}
