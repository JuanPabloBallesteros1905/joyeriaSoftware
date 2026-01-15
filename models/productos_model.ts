

export interface ProdcutosServices {
    data: ProductosResponse[];
}

export interface ProductosResponse {
    id:              number;
    categoria_id:    number;
    material_id:     number;
    precio:          number;
    destacado:       boolean;
    nombre:          string;
    descripcion:     string;
    subcategoria_id: number;
    peso:            number;
    activo:          boolean;
    fecha_creacion:  Date;
}
