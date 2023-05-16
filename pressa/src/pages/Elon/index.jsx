import { Elon } from "../../components/Elon";
import { ElonBottom } from "../../components/ElonBottom";
import { ElonTashkilotchi } from "../../components/ElonTashkilotshi";
import { Layouts } from "../../components/Layouts";

import React from "react";

export const ElonBerish = () => {
  return (
    <Layouts>
      {
        <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Elon />
          <ElonTashkilotchi />
          <ElonBottom />
        </div>
      }
    </Layouts>
  );
};
