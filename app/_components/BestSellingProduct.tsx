import React from "react";
import Wrapper from "./Wrapper";
// import { products } from "../_lib/data";
import { supabase } from "../_utils/supabase/supabase";

const BestSellingProduct = async () => {
  const { data: products, error } = await supabase.from("products").select();

  if (error) {
    console.log(error);
  }

  if (!products) {
    return <div>No products</div>;
  }

  return (
    <Wrapper
      title="ရောင်းအား‌ကောင်းသော ပစ္စည်းများ"
      products={products}
      href="/bestselling"
    />
  );
};

export default BestSellingProduct;
