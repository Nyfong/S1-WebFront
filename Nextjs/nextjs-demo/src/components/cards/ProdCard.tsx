import { GetServerSideProps } from "next";
import { fetchData } from "@/lib/fetchData";
import { Product } from "@/lib/Product"; // Import Product type

interface ProductPageProps {
  product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      {/* <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg my-4"
      /> */}
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <p className="font-bold text-xl text-green-600">${product.price}</p>
      <div>
        <h2 className="font-semibold">Reviews</h2>
        {product.reviews.length > 0 ? (
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index}>
                <p className="text-gray-800">{review.comment}</p>
                <p className="font-bold text-sm">{`Rating: ${review.rating}/5`}</p>
                <p className="text-xs text-gray-500">{review.user}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!; // Get the product ID from the URL
  const data = await fetchData();
  const product = data.find((p) => p.id.toString() === id);

  if (!product) {
    return {
      notFound: true, // Return 404 if the product is not found
    };
  }

  return {
    props: { product }, // Pass the product data to the page component
  };
};

export default ProductPage;
