import Visa from "../Assets/visa-logo-svgrepo-com.svg"
import Master from "../Assets/mastercard-4-logo-svgrepo-com.svg"
import PayPal from "../Assets/paypal-logo-svgrepo-com.svg"
export default function LastFooter() {
    return (
      <>
        <div className="text-center bg-gray-300 mt-8 px-10 py-5 flex justify-between flex-wrap">
          <p className="my-3">© 2024 All Rights Reserved.</p>
          <div className="flex gap-10 my-3">
            <img src={Visa} alt=""  className="w-[50px] h-[50px]"/>
            <img src={PayPal} alt="" className="w-[50px] h-[50px]" />
            <img src={Master} alt="" className="w-[50px] h-[50px]" />
          </div>
        </div>
      </>
    );
}