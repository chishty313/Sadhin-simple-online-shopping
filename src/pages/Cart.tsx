import CartDetails from "../components/CartDetails";
import OrderSummary from "../components/OrderSummary";
import { useAppSelector } from "../redux/hooks";

const Cart = () => {
  const products = useAppSelector((state) => state.cart.products);
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product) => (
              <CartDetails key={product.id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500">No Product Found</p>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
