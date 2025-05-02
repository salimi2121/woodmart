import Header from "./Header/Header";
import SocialMedia from "./SocialMedia";

export default function Shop() {
  return (
    <div className="shop">
      <div className="bg-orange d-1025-none py-2 d-flex justify-content-center align-items-center">
        <SocialMedia />
      </div>
      <Header />
    </div>
  );
}
