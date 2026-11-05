export interface Tarea {
  id: number;
  descripcion: string;
  completada: boolean;
}

export const misTareas: Tarea[] = [
  { id: 1, descripcion: "Repasar interfaces", completada: false },
  { id: 2, descripcion: "Practicar arrays", completada: false },
  { id: 3, descripcion: "Leer sobre clases", completada: true }
];

export function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {
  return lista.map((tarea) =>
    tarea.id === idBuscar ? { ...tarea, completada: true } : tarea
  );
}

export function demostrarTareas(): void {
  const tareasCompletadas = completarTarea(misTareas, 2);
  console.log("Reto 2 - Lista original:", misTareas);
  console.log("Reto 2 - Nueva lista:", tareasCompletadas);
  console.log("Reto 2 - ¿La lista es otra instancia?:", tareasCompletadas !== misTareas);
}
