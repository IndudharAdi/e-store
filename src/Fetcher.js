const BASE_URL = "http://localhost:3001";

export const Fetcher =async (url) => {
    let responseObject = { errorMessage: '', data: [] };

    try {
        const response = await fetch(BASE_URL +url);
        if(!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }
        const responseData = await response.json();
        responseObject.data = responseData;

    } catch(err) {
        responseObject.errorMessage = err.message;
        
    }
    return responseObject;
};

export const getCategories = () => {
    return Fetcher ('/categories');
}

export const getProducts = id => {
    return Fetcher ('/products?catId=' + id);
}

export const getProductByID = id => {
    return Fetcher ('/products/' +id);
}

export const getProductsByQuery = query => {
    return Fetcher ('/products?q=' + query);
}