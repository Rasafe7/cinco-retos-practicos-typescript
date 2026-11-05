export class ProductComponent {
  private readonly iva = 0.21;

  constructor(
    public nombreProducto: string,
    private precioBase: number
  ) {}

  obtenerPrecioFinal(): number {
    return this.precioBase * (1 + this.iva);
  }
}

export function demostrarProducto(): void {
  const producto = new ProductComponent("Teclado", 50);
  console.log("Reto 3 - Producto:", producto.nombreProducto);
  console.log("Reto 3 - Precio final con IVA:", producto.obtenerPrecioFinal().toFixed(2), "€");
  // La propiedad precioBase es privada y no se puede leer ni modificar desde aquí.
}
