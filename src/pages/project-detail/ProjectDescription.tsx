import { Button } from "antd";
import { FaStar } from "react-icons/fa";

const ProjectDescription = () => {
  return (
    <div className="flex-1">
      <div className="mb-[40px] rounded-lg border bg-white p-[16px] shadow">
        <h2 className="mb-[12px] text-[30px] font-bold leading-tight text-color-10">
          ຮັບອອກແບບໂລໂກ້, Branding, CI Brand ຄຸນນະພາບສູງດ້ວຍປະສົບການ 5 ປີ
        </h2>
        <div className="space-y-2">
          <div className="text-[16px]">
            <p className="text-color-2">ປະເພດ</p>
            <p className="text-color-1">Graphic Design</p>
          </div>
          <div className="mt-2 flex items-center text-[16px]">
            <FaStar className="text-[#FFC700]" />
            <p className="ml-2">
              <span className="text-color-1">4.5</span> | ສຳເລັດວຽກ:
              <span className="ml-1 font-semibold text-color-1">26 ຄັ້ງ</span>
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 19C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V13H7V15H13V13H20V17C20 17.55 19.8042 18.0208 19.4125 18.4125C19.0208 18.8042 18.55 19 18 19H2ZM9 13V11H11V13H9ZM0 11V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H6V2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V11H13V9H7V11H0ZM8 4H12V2H8V4Z"
                fill="#434C5B"
              />
            </svg>
            <span className="text-color-2">ລາຄາຂັ້ນຕໍ່າ</span>
          </div>
          <div className="mt-2 text-[24px] font-semibold text-color-1">
            <span className="text-lg font-bold">1,000,000 ກີບ</span>
          </div>
        </div>
      </div>
      <Button
        type="primary"
        // size="large"
        className="w-full rounded-full bg-color-1 py-[25px] text-[16px] font-semibold text-white"
      >
        ແຊັທຫາຟຣີແລນສ໌
      </Button>
      <div className="mt-[124px] rounded-lg bg-color-8 p-4 text-[16px] text-color-7 shadow">
        <h3 className="text-lg font-bold text-color-1">ລາຍລະອຽດວຽກ</h3>
        <p className="mt-2 leading-loose">
          We are here to make sure you get a design that can make you proud. we
          will design flat/3d, minimalist logos for your brand/website/business
          and any use that will take your business to a high level. our
          professional graphic designer team with vast experience in Graphic
          design and already served many international big brands., particularly
          in coming up with logos, business cards, stationery, complete
          identities, etc. A lot made with any user demand required. in keeping
          with your wishes, with experience and aesthetic style in Maine.
          Contact us with no hesitation for your services.
        </p>
        <ul className="list-inside list-disc leading-loose">
          <li>Why choose Me?</li>
          <li>Fast and high-quality professional service.</li>
          <li>100% original vector work.</li>
          <li>Reliable and Quick communication</li>
          <li>3d, Minimalist and flat designs.</li>
          <li>Printable and HQ file size</li>
          <li>Source and Editable files with high quality</li>
          <li>Quick Response Time</li>
          <li>High-quality logos and 100% Satisfaction guaranteed</li>
          <li>Customer support 24/7</li>
          <li>Unlimited Revisions</li>
        </ul>
        <p className="leading-loose">
          Have questions? Feel free to reach out via Inbox. I'll be more than
          happy to assist you. My client's satisfaction is my #1 priority. Just,
          take a quick look at feedback from my other clients. Place your order
          and get ready to be amazed! Thank you
        </p>
      </div>
    </div>
  );
};

export default ProjectDescription;
