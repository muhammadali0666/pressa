import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_inner">
          <h1 className="hero_paragraph">
            Eng so’ngi master klasslar va tadbirlar bizning saytda
          </h1>
          <ul className="hero_list">
            <li className="hero_item">
              <div className="hero_box">
                <input type="date" className="hero_input" />
              </div>
            </li>
            <li className="hero_item">
              <select name="" id="" className="hero_select">
                <option value="" className="hero_option">
                  Bo'limni tanlang
                </option>
                <option
                  style={{ fontSize: "20px", color: "#000" }}
                  value=""
                  className="hero_option"
                >
                  IT
                </option>
                <option value="" className="hero_option">
                  Web dasturlash
                </option>
                <option value="" className="hero_option">
                  Mobile dasturlash
                </option>
                <option
                  style={{ fontSize: "20px", color: "#000" }}
                  value=""
                  className="hero_option"
                >
                  Dizayn
                </option>
                <option value="" className="hero_option">
                  UX/UI dizayn
                </option>
                <option value="" className="hero_option">
                  Grafik dizayn
                </option>
                <option
                  style={{ fontSize: "20px", color: "#000" }}
                  value=""
                  className="hero_option"
                >
                  Biznes
                </option>
                <option value="" className="hero_option">
                  Menegment
                </option>
                <option value="" className="hero_option">
                  Kredit va audit
                </option>
                <option
                  style={{ fontSize: "20px", color: "#000" }}
                  value=""
                  className="hero_option"
                >
                  Ta'lim
                </option>
                <option value="" className="hero_option">
                  Matematika
                </option>
                <option value="" className="hero_option">
                  Fizika
                </option>
              </select>
            </li>
            <li className="hero_item">
              <select className="hero_select" name="" id="">
                <option value="" className="hero_option">
                  Online
                </option>
                <option value="" className="hero_option">
                  Offline
                </option>
              </select>
            </li>
            <li className="hero_item">
              <select name="" id="" className="hero_select">
                <option value="" className="hero_option">
                  Ism-familya
                </option>
                <option value="" className="hero_option">
                  Abdulla Azizov
                </option>
                <option value="" className="hero_option">
                  Akbar Turdiyev
                </option>
                <option value="" className="hero_option">
                  Akbar Jumayev
                </option>
                <option value="" className="hero_option">
                  Begzod Iskandarov
                </option>
                <option value="" className="hero_option">
                  Baxodir Jalolov
                </option>
                <option value="" className="hero_option">
                  Sardor Qodirov
                </option>
                <option value="" className="hero_option">
                  Sohib Sharipov
                </option>
                <option value="" className="hero_option">
                  Dilmurod Alimbayev
                </option>
                <option value="" className="hero_option">
                  Dilshod Rahmanov
                </option>
              </select>
            </li>
            <li className="hero_item">
              <button className="hero_btn" type="button">
                Izlash
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
