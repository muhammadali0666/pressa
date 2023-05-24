import "./sidebar.css";
import SearchAdmin from "../../assets/img/search_admin.png";
import Notificate from "../../assets/img/notificate.png";
import Pro from "../../assets/img/habiib.jfif";

export const SidebarHeader = () => {
  return (
    <div className="admin_header">
      <img
        src={SearchAdmin}
        alt="img"
        className="admin_header_img_one"
        width={18}
        height={18}
      />
      <input type="text" className="admin_header_input" placeholder="search" />
      <div className="admin_headaer_box">
        <img
          src={Notificate}
          alt="img"
          className="admin_header_img"
          width={28}
          height={29}
        />
        <img
          className="admin_header_img_next"
          src={Pro}
          alt="img"
          width={44}
          height={44}
        />
        <span className="admin_span">
          <p className="admin_header_p">Habib Nurmagamedov</p>
          <p className="admin_header_p_next">id:12432</p>
        </span>
      </div>
    </div>
  );
};
