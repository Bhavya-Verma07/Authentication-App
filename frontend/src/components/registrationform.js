import React,{useState} from "react";
import "./style.css";

export const Registrationform = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isRequestedOtp, setIsRequestedOtp] = useState(false);

  const sendOtp = async () => {
    try {
      setIsRequestedOtp(true);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      setIsPhoneVerified(true);
      alert(`Your OTP is successfully verified i.e. ${otp}`);
    } catch (error) {
      console.log(error);
    }
  };

  const submitdetails = () => {
    try {
      if (isPhoneVerified === false) {
        return alert("Please verify your phone number first");
      } else {
        alert("your details submitted");
      }
    } catch (error) {}
  };

  return (
    <div>
      <form className="formcontainer">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="textarea"
            className="form-control"
            aria-describedby="your full name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={emailId}
            onChange={(e)=> setEmailId(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="textarea"
            className="form-control"
            aria-describedby="your address"
            value={address}
            onChange={(e)=> setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="mobile number"
            value={phonenumber}
            onChange={(e)=> setPhonenumber(e.target.value)}
          />
        </div>
{isRequestedOtp=== true? (<>
  <div className="mb-3">
          <label className="form-label"> Enter One Time Password(OTP) sent to your number.</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="mobile number"
            value={otp}
            onChange={(e)=> setOtp(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary mx-2" id="buttons" onClick={()=> verifyOtp()}>
         Verify OTP
        </button>
       </> 
): 
<button type="submit" className="btn btn-primary mx-2" id="buttons" onClick={()=> sendOtp()}>
          Send OTP
        </button>
        }
        <button type="submit" className="btn btn-primary" onClick={()=> submitdetails()}>
          Submit
        </button>
      </form>
    </div>
  );
};
