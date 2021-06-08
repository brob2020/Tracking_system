import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    Account: "",
    Incident: "",
    Serial_Number: "",
    Name: "",
    Description: "",
    Address: "",
    PhoneNumber: "",
    User_Name: "",
    Type: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIsSubmitting(false);
    setValues({
      ...values,
      [name]: value,
    });
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle errors
    setErrors(validate(values, setValues));
    setIsSubmitting(true);
  };

  useEffect(() => {
    // Check if there are no errors
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      console.log(errors);
    } else if (Object.keys(errors).length > 0 && isSubmitting) {
      // Show error notification
      toast.error("there is an error check the form for verification", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(errors);

      // Scroll to top
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
