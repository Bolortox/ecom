import { Basket } from "./svg/Basket";
import { Heart } from "./svg/Heart";
import { Search } from "./svg/Search";

export const Header = () => {
  return (
    <div className="w-full h-[68px] bg-black flex items-center justify-center ">
      <div className="w-[1200px] h-[32px] flex justify-around items-center text-white">
        <div className="flex gap-[16px]">
          <p>Ecommerce</p>
          <p>Ангилал</p>
        </div>
        <div className="w-[300px] h-[40px] rounded-[20px] bg-[#18181B] flex items-center px-4 gap-[6px]">
          <Search />
          <input
            type="text"
            placeholder="Бүтээгдэхүүн хайх"
            className="bg-[#18181B]"
          />
        </div>
        <div className="flex items-center gap-5">
          <Heart />
          <Basket />
          <button className=" w-[101px] h-[36px] border border-[#2563EB] bg-black rounded-[20px]">
            Бүртгүүлэх
          </button>
          <button className="bg-[#2563EB] w-[86px] h-[36px] rounded-[20px]">
            Нэвтрэх
          </button>
        </div>
      </div>
    </div>
  );
};
