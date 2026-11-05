export class ServicioDatos {
  constructor(public endpoint: string) {}

  conectar(): void {
    console.log("Reto 5 - Conectando a " + this.endpoint);
  }
}

export class ServicioUsuarios extends ServicioDatos {
  public entidad = "usuarios";

  constructor(endpoint: string) {
    super(endpoint);
  }
}

export function demostrarHerencia(): void {
  const servicio = new ServicioUsuarios("https://api.ejemplo.com");
  servicio.conectar();
  console.log("Reto 5 - Entidad del servicio:", servicio.entidad);
}
