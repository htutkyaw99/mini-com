import React from "react";
import Wrapper from "./Wrapper";
// import { products } from "../_lib/data";
import { supabase } from "../_utils/supabase/supabase";

const NewProduct = async () => {
  const { data: products, error } = await supabase.from("products").select();

  if (error) {
    console.log(error);
  }

  if (!products) {
    return <div>No products</div>;
  }

  return (
    <div>
      <Wrapper
        title="အသစ်ထွက်သော ပစ္စည်းများ"
        products={products}
        href="/new"
      />
    </div>
  );
};

export default NewProduct;
