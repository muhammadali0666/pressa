import "./notification.css";
import { useEffect, useState } from "react";

export const Notification = () => {
  const [data, setData] = useState([]);
  // let [id, setId] = useState();

  // console.log(id);

  useEffect(() => {
    fetch("http://localhost:4001/get_card")
      .then((res) => res.json())
      .then((mydata) => setData(mydata));
  }, []);

  const handleData = (e) => {
    fetch(`http://localhost:4001/update_annon/${e.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isApply: true,
        id: e.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    alert("updated");
    window.location.reload(true);
    // window.location.href = "/home"
  };

  ////////////////////////////////////////////////////////////

  const handleCancel = (e) => {
    fetch(`http://localhost:4001/update_active/${e.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isActive: false,
        id: e.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    alert("canceled");
    window.location.reload(true);
  };

  return (
    <div>
      {data.length &&
        data.map(
          (e, idx) =>
            e.isApply === false && e.isActive === true && (
              <>
                <div key={idx} className="notification">
                  <div className="notification_box">
                    <h4 className="notifction_paragraph">{e.title}</h4>
                    <div className="notification_mini_box">
                      <button
                        className="notification_btn"
                        onClick={() => handleCancel(e)}
                      >
                        Bekor qilish
                      </button>
                      <button
                        type="button"
                        className="notification_btn"
                        style={{
                          background: "#0094FF",
                          opacity: "1",
                          color: "#fff",
                        }}
                        onClick={() => handleData(e)}
                      >
                        Tasdiqlash
                      </button>
                    </div>
                  </div>
                  <div className="notification_bottom_box">
                    <p className="notification_bottom_p">{e.fullname}</p>
                    <p className="notification_bottom_p_next">
                      {e.phoneNumber}
                    </p>
                    <p className="notification_bottom_p_next">{e.date}</p>
                    <p className="notification_bottom_p_next">{e.time}</p>
                    <p className="notification_bottom_p_next">{e.profession}</p>
                  </div>
                </div>
              </>
            )
        )}
    </div>
  );
};
