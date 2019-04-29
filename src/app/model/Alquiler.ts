export type estadoAlquiler = 'Reservada' | 'Alquilada' | 'Retornada' | 'Reserva Cancelada';

export class Alquiler {
  id: number;
  idCliente: number;
  idPelicula: number;
  fechaAlta: Date;
  fechaPago: Date;
  fechaRetiro: Date;
  fechaRetorno: Date;
  estado: estadoAlquiler;
}
