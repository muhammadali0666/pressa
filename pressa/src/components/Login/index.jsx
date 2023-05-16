import "./login.css";
import User from "../../assets/img/login_user.png";
import Lock from "../../assets/img/lock.png"

export const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="login_inner">
          <a href="#" className="login_logo">
            <p className="login_p">Pressa</p>
          </a>

          <div className="login_box">
            <h2 className="login_paragraph">Tizimga kirish</h2>
            <form className="login_form">
              <div className="login_mini_box">
                <img style={{marginRight: "-30px"}} src={User} alt="user" className="login_login" width={16} height={16}/>
                <input
                  type="email"
                  placeholder="login"
                  className="login_input"
                  style={{marginBottom: "30px", paddingLeft: "40px"}}
                />
              </div>
              <div className="login_mini_box">
                <img  src={Lock} alt="user" style={{marginRight: "-30px"}} className="login_login" width={13} height={16}/>
                <input
                type="password"
                placeholder="parol"
                className="login_input"
                style={{paddingLeft: "40px"}}
              />
              </div>
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
