import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <React.Fragment>
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item p-3">
          <Link to="/">หน้าหลัก</Link>
        </li>
        <li className="nav-item p-3">
          <Link to="/report">แจ้งข้อมูล</Link>
        </li>
        <li className="nav-item p-3">
          <Link to="/about">เกี่ยวกับเรา</Link>
        </li>
      </ul>
    </nav>
    <div className="container">{children}</div>
  </React.Fragment>
);

export default Layout;
