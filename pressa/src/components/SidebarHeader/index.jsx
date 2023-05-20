import "./sidebar.css"
import SearchAdmin from "../../assets/img/search_admin.png"

export const SidebarHeader = () => {
  return (
    <div className="admin_header">
      <img src={SearchAdmin} alt="img" className="admin_header_img" width={18} height={18}/>
      <input type="text" className="admin_header" />
    </div>
  )
}
