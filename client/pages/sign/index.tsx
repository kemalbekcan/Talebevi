import React from "react";

const index = () => {
  return (
    <div>
      <div className="one-top">header</div>
      <div className="two-top">site yolu</div>
      <div className="container">
        <div className="sign-in">
          <h2>Login</h2>
          <div className="form">
            <div className="form-group">
              <label htmlFor="">
                Kullanıcı Adı veya E-mail{" "}
                <strong className="label-required">*</strong>
              </label>
              <input type="text" name="username" autoComplete="username" />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Şifre <strong className="label-required">*</strong>
              </label>
              <input type="text" name="username" autoComplete="username" />
            </div>
            <div className="form-button">
              <button
                className="sign-button"
                type="submit"
                name="sign-login"
                value={"login"}
              >
                Login
              </button>
              <div className="form-check">
              <div className="check">
                <input type="checkbox" name="remember_me" />
              </div>
              <label htmlFor="">Beni Hatırla</label></div>
            </div>
            <div className="forgot">
              <a href="#">Şifremi unuttum</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
