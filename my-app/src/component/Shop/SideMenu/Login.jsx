import { Link } from "react-router-dom";
import SideMenuHeader from "./SideMenuHeader";
import { GoPerson } from "react-icons/go";

export default function Login() {
  return (
    <div className="login">
      <SideMenuHeader title="ورود" />
      <div className="p-3 border-bottom border-1 sidemenu-container">
        <form action="">
          <label htmlFor="username" className="required my-2 fw-500">نام کاربری یا آدرس ایمیل</label>
          <input type="text" id="username" className="form-control rounded-5 border-2" required />
          <label htmlFor="password" className="required my-2 fw-500">رمز عبور</label>
          <input type="password" id="password" className="form-control rounded-5 border-2" required />
          <button type="submit" className="rounded-5 form-control text-white bg-orange fw-bold py-2 my-1">ورود</button>
        </form>
        <div className="d-flex align-items-center my-3">
            <input type="checkbox" name="" id="remember-me" className="mt-1" />
            <label htmlFor="remember-me" className="mx-2 fw-500">مرا به خاطر بسپار</label>
        </div>
        <Link to="/my-account/lost-password" className="text-orange fw-500">رمز عبور را فراموش کرده اید؟</Link>
      </div>
      <div className="p-3 d-flex flex-column align-items-center border-bottom border-1">
        <div className="d-flex flex-column align-items-center">
            <GoPerson className="account-icon mb-2" />
            <span className="text-black fw-bold">هنوز حساب کاربری ندارید؟</span>
        </div>
        <Link to="/my-account/?action=register" className="create-account my-3 fw-500">ایجاد حساب کاربری</Link>
      </div>
    </div>
  );
}
