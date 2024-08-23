import ProductList from "@/components/product-list";
import Slider from "@/components/slider";
import { WixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  const wixClient = await WixClientServer();
  const res = await wixClient.products.queryProducts().find();
  console.log({ res });
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Product</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;