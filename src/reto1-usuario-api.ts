export interface UsuarioAPI {
  id: number;
  username: string;
  email: string;
  rol: "admin" | "editor" | "alumno";
  token?: string;
}

export const usuarioValido: UsuarioAPI = {
  id: 1,
  username: "rafa",
  email: "rafa@example.com",
  rol: "alumno",
  token: "token-de-ejemplo"
};

// @ts-expect-error El rol "invitado" no pertenece a los valores permitidos.
export const usuarioInvalido: UsuarioAPI = { id: 2, username: "invitado", email: "invitado@example.com", rol: "invitado" };

export function demostrarContratoUsuario(): void {
  console.log("Reto 1 - Usuario válido:", usuarioValido);
}
