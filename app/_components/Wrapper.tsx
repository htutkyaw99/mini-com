import React from "react";
import Card from "./Card";
import { Product } from "../_types/product";
import Link from "next/link";
// import Sm_Card from "./Sm_Card";

type Props = {
  title: string;
  products: Product[];
  href: string;
};

const Wrapper = ({ title, products, href }: Props) => {
  return (
    <div className="px-2">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[16px]">{title}</h3>
        <Link href={href} className="text-[10px] text-blue-500">
          အားလုံးကြည့်ရန်
        </Link>
      </div>
      <div className="overflow-x-auto whitespace-nowrap scroll-smooth">
        <div className="flex space-x-4 pb-4 pt-2">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              price={product.price}
              inStock={product.inStock}
              image={product.image}
              qty={product.qty}
            />
          ))}
          {/* <Sm_Card /> */}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
