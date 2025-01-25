"use client";
import { useEffect, useState } from "react";

export const Body = () => {
  interface Prod {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  }

  const [products, setProduct] = useState<Prod[]>([]);

  const getProd = async () => {
    const response = await fetch("http://localhost:8080/api/prod");
    const data = await response.json();
    setProduct(data.data);
  };
  console.log(products);

  useEffect(() => {
    getProd();
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[1038px] flex justify-center items-center py-[21px]">
        <div className="grid grid-cols-4 grid-rows-2 gap-[21px]">
          {products?.map((prod) => (
            <div key={prod.id} className=" w-[245px] h-[391px] ">
              <div className=" ">
                <img
                  src={prod.imageUrl}
                  className="w-[244px] h-[331px] rounded-2xl overflow-hidden"
                />
              </div>
              <div className="mt-4 flex justify-start flex-col ">
                <h2 className="text-base ">{prod.name}</h2>
                <p className="text-base font-bold">{prod.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
