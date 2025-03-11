import AppleLogo from "../Assets/apple-logo-svgrepo-com.svg";
import MicrosoftLogo from "../Assets/microsoft-logo-svgrepo-com.svg";
import TwitterLogo from "../Assets/twitter-3-logo-svgrepo-com.svg";
import Four from "../Assets/google-icon-logo-svgrepo-com.svg"
import Five from "../Assets/spotify-1-logo-svgrepo-com.svg"
export default function BestSellers() {

  return (
    <section className="bg-white min-h-screen my-5 p-5">
      <hr />
      <section className="flex justify-around gap-10 my-5 flex-wrap">
        <img src={Four} alt="Apple Logo" className="w-20 h-20" />
        <img src={Five} alt="Apple Logo" className="w-20 h-20" />
        <img src={AppleLogo} alt="Apple Logo" className="w-20 h-20" />
        <img src={MicrosoftLogo} alt="Microsoft Logo" className="w-20 h-20" />
        <img src={TwitterLogo} alt="Twitter Logo" className="w-20 h-20" />
      </section>
      <hr />
    </section>
  );
}
