import React, { useState } from "react";
import "../css/home.scss";
import { Message, useToaster } from "rsuite";
import TogglePassword from "../components/TogglePassword";
import Counter from "../components/Counter";
import RegisterForm from "../components/RegisterForm";
import ColorPicker from "../components/ColorPicker";

const Home = () => {
  const toaster = useToaster();
  // const [name, setname] = useState("vikas");
  const [counterNum, setcounterNum] = useState(0);
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  // useEffect(() => {
  //   alert('hello')
  // }, [name])
  const showMsg = (msg, msgtype) => {
    toaster.push(
      <Message showIcon type={msgtype}>
        {msg}
      </Message>,
      "bottomCenter"
    );
  };
  return (
    <div className="container">
      <div className="row py-2">
        <div className="col-6">
          <Counter counterNum={counterNum} setcounterNum={setcounterNum} />
        </div>
        <div className="col-6">
          <TogglePassword
            setisPasswordVisible={setisPasswordVisible}
            isPasswordVisible={isPasswordVisible}
          />
        </div>
        <div className="col-md-6">
          <RegisterForm showMsg={showMsg} />
        </div>
        <div className="col-md-6">
          <ColorPicker />
        </div>
        <div className="col-md-6">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
