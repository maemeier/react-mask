import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import data from "../data/data.json";
const socialMediaList = data.Lists;
const maskLists = data.Lists;

const List = () => {
  return (
    <div>
      {maskLists.map(list => (
        <div class="card" style={{ margin: 15 }}>
          <div class="card-body">
            <h5 class="card-title" style={{ fontWeight: "bold" }}>
              {list.hospitalName} ({list.engName})
            </h5>
            <p class="card-text" style={{ color: "grey" }}>
              ที่อยู่ :{list.location}
            </p>
            <p class="card-text" style={{ color: "grey" }}>
              เบอร์โทรศัพท์ : {list.phone}
            </p>
            <a href="#" class="btn btn-primary">
              จำนวนที่ต้องการ {list.amount}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
