import { data } from "autoprefixer";
import { Link } from "react-router-dom";


function ProductCard({dataItem , id}) {
    // console.log('dataItem==>' , dataItem);
    
    
    return(
        <Link to={`/products/${dataItem.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">


  <div >
    <a className="block relative h-48 rounded overflow-hidden">
      <img
        alt="ecommerce"
        className="object-cover object-center w-full h-full block"
        src={dataItem.thumbnail}
      />
    </a>
    <div className="mt-4">
      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
        {dataItem.category}
      </h3>
      <h2 className="text-gray-900 title-font text-lg font-medium">
        {dataItem.title}
      </h2>
      <p className="mt-1">${dataItem.price}</p>
    </div>
  </div>

        </Link>
        )
}

export default ProductCard;