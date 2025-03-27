import NewProduct from "./_components/NewProduct";
import BestSellingProduct from "./_components/BestSellingProduct";
import AllProducts from "./_components/AllProducts";
import Navbar from "./_components/Navbar";
import { supabase } from "./_utils/supabase/supabase";
import Wrapper from "./_components/Wrapper";

const Page = async () => {
  return (
    <div>
      <Navbar />
      <div className="space-y-5 mt-3 p-1">
        <NewProduct />
        <BestSellingProduct />
        <AllProducts />
      </div>
    </div>
  );
};

export default Page;
