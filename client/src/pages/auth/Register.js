import React, { useEffect } from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { toast } from "react-toastify"; // Import toast if you want to use toast notifications

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    // If there is an error, show it using toast or alert
    if (error) {
      toast.error(error);  // Shows the error as a toast notification
      alert(error);  // Optional: Shows a browser alert as well
    }
  }, [error]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner2.jpg" alt="registerImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
