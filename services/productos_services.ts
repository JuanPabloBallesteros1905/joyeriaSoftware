import { ParamsOf } from './../.next/dev/types/routes.d';





import { apiClient } from "@/lib/api_client";




class ProductosServices {


    async getAllProducts() {




        try {
            const categorias = await apiClient.get('/productos');






            return categorias;


        } catch (error) {
            console.error("Error fetching categorias:", error);
            throw error;
        }
    }


}


export const productosServices = new ProductosServices();   