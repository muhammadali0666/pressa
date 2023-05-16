import "./card.css";
import CardImg from "../../assets/img/card.png";
import User from "../../assets/img/user.png";
import Data from "../../assets/img/data.png";
import Clock from "../../assets/img/clock.png";
import Eye from "../../assets/img/eye.png";
import Network from "../../assets/img/network.png";
import Chart from "../../assets/img/chart.png";

export const Card = () => {
  return (
    <div className="card">
      <div className="card_inner">
        <div className="card_box">
          <img
            src={CardImg}
            alt="card"
            className="card_img"
            width={399}
            height={417}
          />
          <div className="card_inner_box">
            <h4 className="card_paragraph">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h4>
            <div className="card_bottom_box">
              <div className="card_bottom_box_left">
                <ul className="card_bottom_box_left_list">
                  <li className="card_bottom_box_left_item">
                    <img
                      src={User}
                      alt="icon"
                      className="card_bottom_box_left_img"
                      width={12}
                      height={16}
                    />
                    <p className="card_bottom_box_left_p">Alisher Isaev</p>
                  </li>
                  <li className="card_bottom_box_left_item">
                    <img
                      src={Data}
                      alt="icon"
                      className="card_bottom_box_left_img"
                      width={16}
                      height={16}
                    />
                    <p className="card_bottom_box_left_p">17 / 01 / 2022</p>
                  </li>
                  <li className="card_bottom_box_left_item">
                    <img
                      src={Network}
                      alt="icon"
                      className="card_bottom_box_left_img"
                      width={16}
                      height={11}
                    />
                    <p className="card_bottom_box_left_p">Online</p>
                  </li>
                </ul>
              </div>
              <div
                className="card_bottom_box_right"
                style={{ marginLeft: "50px" }}
              >
                <ul className="card_bottom_box_left_list">
                  <li className="card_bottom_box_left_item">
                    <img
                      src={Chart}
                      alt="icon"
                      className="card_bottom_box_left_img"
                      width={16}
                      height={15}
                    />
                    <p className="card_bottom_box_left_p">Tadbirkor</p>
                  </li>
                  <li className="card_bottom_box_left_item">
                    <img
                      src={Clock}
                      alt="icon"
                      className="card_bottom_box_left_img"
                      width={16}
                      height={16}
                    />
                    <p className="card_bottom_box_left_p">15:00</p>
                  </li>
                  <li className="card_bottom_box_left_item">
                    <img
                      src={Eye}
                      alt="icon"
                      className="card_bottom_box_left_img"
                      width={17}
                      height={16}
                    />
                    <p className="card_bottom_box_left_p">2555</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
