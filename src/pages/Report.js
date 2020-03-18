import React, { useState } from "react";
import Header from "../components/Header2";
import Layout from "../components/Layout";
const Report = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
    buttonText: "Submit"
  });

  const { name, phone, message, buttonText } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValues({
      ...values,
      buttonText: "...sent"
      // send data to email
    });
    console.table({ name, phone, message });
  };

  //form
  const feedbackForm = () => (
    <>
      <form onSubmit={handleSubmit} style={{ margin: 15 }}>
        <div className="form-group">
          <label className="text=muted">ที่อยู่:</label>
          <textarea
            class="form-control"
            type="text"
            className="form-control"
            value={message}
            onChange={handleChange("message")}
            required
          >
            {" "}
          </textarea>
        </div>
        <div className="form-group">
          <label className="text=muted">ชื่อสถานพยาบาล:</label>
          <input
            class="form-control"
            type="text"
            onChange={handleChange("name")}
            value={name}
            required
          />
        </div>

        <div className="form-group">
          <label className="text=muted">
            จำนวนหน้ากากที่ต้องการต่อสัปดาห์:
          </label>
          <input
            class="form-control"
            type="number"
            onChange={handleChange("phone")}
            value={phone}
            required
          />
        </div>
        <button className="btn btn-outline-primary btn-block">
          {buttonText}
        </button>
      </form>
    </>
  );

  return (
    <div>
      <Layout />
      <Header />
      <h5 className="text">แจ้งรายชื่อสถานพยาบาลที่ขาดแคลนหน้ากากอนามัย</h5>
      {feedbackForm()}
    </div>
  );
};

export default Report;
