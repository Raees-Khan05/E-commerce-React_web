import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CategoryChip from "./CategoryChip";

function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [chosenCategory, setChosenCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        console.log("use effect is being called");
        const url = chosenCategory === 'All'
            ? 'https://dummyjson.com/products'
            : `https://dummyjson.com/products/category/${chosenCategory}`;
        axios.get(url)
            .then((response) => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [chosenCategory]);

    // use effect for category
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((response) => {
                setCategories(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleSort = (event) => {
        const order = event.target.value;
        setSortOrder(order);
        let sortedProducts = [...products];

        if (order === "price-asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (order === "price-desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (order === "name-asc") {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (order === "name-desc") {
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        }

        setProducts(sortedProducts);
    };

    return (
        <div className="container mx-auto">
            {
                loading ? (
                    <h1 className="text-center text-3xl">Loading......</h1>
                ) : (
                    <div>
                        




                        <div className="mb-4">
                            <label htmlFor="sort" className="mr-2">Sort By:</label>
                            <select
                            style={{ width: '80%' , marginBottom: '15px' ,
                                marginTop : '15px',
                                marginRight : '4px',
                                paddingRight : '4px'
                             }} 
                                id="sort"
                                value={sortOrder}
                                onChange={handleSort}
                                className="p-2 border rounded"
                            >
                                <option value="">Select</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="name-asc">Name: A to Z</option>
                                <option value="name-desc">Name: Z to A</option>
                            </select>
                        </div>





                        {/* Making chips for rendering categories */}
                        <div className="flex flex-wrap mb-4">
                            <CategoryChip
                                onClick={() => setChosenCategory('All')}
                                isChosen={chosenCategory === 'All'}
                                categoryProps={{
                                    slug: 'All',
                                    name: 'All'
                                }} />
                            {categories.map((category) => (
                                <CategoryChip
                                    onClick={() => setChosenCategory(category.slug)}
                                    isChosen={category.slug === chosenCategory}
                                    categoryProps={category} key={category.slug} />
                            ))}
                        </div>

                        {/* Rendering products through map */}
                        <div className="flex flex-wrap -m-4">
                            {products.map((item) => (
                                <ProductCard dataItem={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Products;
