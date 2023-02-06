import React, { useState } from "react";
const RegisterForm = ({ showMsg }) => {
  const [visible, setvisible] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [data, setdata] = useState({
    name: "helo",
    email: "",
    mobile: "",
  });
  // const [data, setdata] = useState({
  //   name: "helo",
  //   email: "",
  //   mobile: "",
  // });
  
  const showData = () => {
    // if (name === true) {
    //   showMsg("Please Enter Name", "error");
    //   return;
    // }
    // if (email === "") {
    //   showMsg("Please Enter Email", "error");
    //   return;
    // }
    // if (mobile === "") {
    //   showMsg("Please Enter Mobile", "error");
    //   return;
    // }
    setvisible(true);
  };
  const handleChange = (txt, inpName) => {
    console.log(txt, inpName);
    setdata((prev) => {
      return { ...prev, [inpName]: txt }; // inpName = name,email,mobile
    });
  };
  return (
    <div className="RegisterForm">
      <div className="row">
        <div className="col-12">
          <div className="wrapper">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={data.name}
                name="name"
                // onChange={(e) => setname(e.target.value)}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
              />
              {visible && data.name}
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                value={data.email}
                name="email"
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                // onChange={(e) => setemail(e.target.value)}
              />
              {visible && data.email}
            </div>
            <div>
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                value={data.mobile}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                // onChange={(e) => setmobile(e.target.value)}
              />
              {visible && data.mobile}
            </div>
            <button
              className="btn btn-outline-dark px-4"
              onClick={() => {
                showData();
              }}
            >
              Show Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
