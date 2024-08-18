import { WixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  const wixClient = await WixClientServer();
  const res = await wixClient.products.queryProducts().find();
  console.log({res})
  return <div className="">Home Page</div>;
};

export default HomePage;