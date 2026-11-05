export type RespuestaServidor =
  | { status: "success"; data: string[]; mensajeError?: never }
  | { status: "error"; mensajeError: string; data?: never };

export function procesarRespuesta(res: RespuestaServidor): void {
  if (res.status === "success") {
    res.data.forEach((dato) => console.log("Reto 4 - Dato recibido:", dato));
    return;
  }

  console.error("Reto 4 - Error del servidor:", res.mensajeError);
}

export function demostrarRespuestas(): void {
  procesarRespuesta({ status: "success", data: ["perfil", "preferencias"] });
  procesarRespuesta({ status: "error", mensajeError: "No se pudo conectar" });
}
