

import { apiClient } from "@/lib/api_client";




class CategoriasSevices {


    async getCategorias() {




        try {
            const categorias = await apiClient.get('/categories');






            return categorias;


        } catch (error) {
            console.error("Error fetching categorias:", error);
            throw error;
        }
    }


}


export const categoriasServices = new CategoriasSevices();   