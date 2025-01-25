import { EmailIcon } from "./svg/Email";
import { FacebookIcon } from "./svg/Facebook";
import { InstaIcon } from "./svg/Insta";
import { Linkedin } from "./svg/Linkedin";
import { PhoneIcon } from "./svg/Phone";
import { Pine } from "./svg/Pinecone";
import { XIcon } from "./svg/XIcon";

export const Footer = () => {
  return (
    <div className=" w-full h-[282px] flex justify-center items-center bg-black ">
      <div className="w-[1200px] flex flex-col">
        <div className="flex justify-between border-black border-2 border-b-[#FFFFFF1A] pb-[43px]">
          <Pine />
          <div className="flex gap-[38px]">
            <div className="flex justify-center items-center gap-5">
              <PhoneIcon />
              <p className="text-white">(976) 7007-1234</p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <EmailIcon />
              <p className="text-white">contact@ecommerce.mn</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-[43px]">
          <p className=" text-white">© 2024 Ecommerce MN</p>
          <div className="flex gap-[26px]">
            <FacebookIcon />
            <InstaIcon />
            <XIcon />
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
