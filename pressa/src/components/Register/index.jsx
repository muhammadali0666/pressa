import "./register.css";

export const Register = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="login_inner">
          <a href="#" className="login_logo">
            <p className="login_p">Pressa</p>
          </a>

          <div className="login_box">
            <h2 className="login_paragraph">Ro'yxatdan o'tish</h2>
            <form className="login_form">
              <input
                type="text"
                placeholder="Username"
                className="login_input login_input_extra"
              />
              <input
                type="email"
                placeholder="login"
                className="login_input login_input_extra"
              />
              <input
                type="password"
                placeholder="parol"
                className="login_input login_input_extra"
              />
              <a href="#" className="login_check">
                Parolni unutdingizmi?
              </a>
              <button className="login_btn">Kirish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
