import React from "react"
import { useSearchParams } from "react-router-dom";

import { getProductsByQuery } from "../Fetcher";
import CategoryProduct from "./CategoryProduct";

const SearchResults = () => {
    const [products, setProducts] = React.useState ( {
            errorMessage: "",
            data: [],
    });

    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');

    React.useEffect(() => {
            const fetchData = async () => {
                const responseObject = await getProductsByQuery(query);
                setProducts (responseObject);
            };
            fetchData();
        }, [query]);

    const renderProducts = () => {
        if (products.data.length > 0) {
            return products.data.map((p) => (
                <CategoryProduct key={p.id} {...p}> 
                    {p.title} 
                </CategoryProduct>
            ));
        }
        else{
            return <div> No Results Found</div>
        }
};

    return (
        <div> 
            { products.errorMessage && 
                <div>Error: {products.errorMessage} </div> }

            {renderProducts() }
        </div>
    )
}

export default SearchResults;