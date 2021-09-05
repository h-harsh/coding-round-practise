import { FilterDisplay } from "../Components/Filter Display/filterDisplay"
import { ProductDisplay } from "../Components/Product Display/productDisplay"

export const ProductListingPage = () => {
    return(
        <div className="cont-page-prodList">
            <FilterDisplay/>
            <ProductDisplay/>
        </div>
    )
} 