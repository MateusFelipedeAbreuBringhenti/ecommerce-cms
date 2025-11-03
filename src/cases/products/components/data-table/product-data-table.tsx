import { DataTable } from "@/components/ui/data-table";
import { useProducts } from "../../hooks/use-product";
import { productColumns } from "./product-columns";

export function ProductDataTable() {

    const {data: products, isLoading} =  useProducts();

    return (
        <div>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
            <DataTable columns= {productColumns} data={products!}/>
            )}
        </div>
    )
}