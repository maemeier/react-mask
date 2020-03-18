import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          MASKFINDER
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              หน้าหลัก <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              แจ้งข้อมูล
            </a>
            <a class="nav-item nav-link" href="#">
              ติดต่อเรา
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
