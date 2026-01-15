







export interface CategoriaModel {
    data: CategoriaResponse[];
}

export interface CategoriaResponse {
    descripcion: string;
    activa:      boolean;
    id:          number;
    nombre:      string;
}
