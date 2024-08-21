import Slider from "@/components/slider";
import { WixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  const wixClient = await WixClientServer();
  const res = await wixClient.products.queryProducts().find();
  console.log({res})
  return <div className="">
    <Slider/>
  </div>;
};

export default HomePage;