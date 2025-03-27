import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
  image: string;
  qty: number;
};

const Card = ({ title, qty, inStock, image }: Props) => {
  return (
    <div className="bg-slate-100 shadow-lg w-full min-w-[130px] rounded-lg relative">
      <div className="bg-slate-300 min-h-32 relative rounded-t-lg overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
          />
        )}
      </div>
      <div className="p-4 space-y-2">
        <h6 className="text-[15px]">{title}</h6>
        {/* <p className="text-[13px]">ဈေးနှုန်း - {price} ကျပ်</p> */}
        <p className="text-[15px]">1 ဖာ = {qty} ခု</p>
      </div>
      {inStock === false && (
        <div className="absolute bg-white px-3 py-1 rounded-xl top-3 right-3 flex items-center justify-center">
          <p className="text-[10px]">Out of stock</p>
        </div>
      )}
    </div>
  );
};

export default Card;
