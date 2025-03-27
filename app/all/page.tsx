import React from "react";
import Card from "../_components/Card";
import { products } from "../_lib/data";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-4 mt-3">
      <div className="flex items-center justify-between gap-3">
        <Link href="/">
          <svg
            className="w-10 h-10 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </Link>
        <h1 className="text-xl">ဆိုင်တွင်ရှိသော ပစ္စည်းများ</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
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
      </div>
    </div>
  );
};

export default page;
