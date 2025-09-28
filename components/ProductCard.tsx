interface Product {
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 flex flex-col">
            <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard