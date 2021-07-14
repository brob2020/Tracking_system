export default function validate(values, setValues) {
  let errors = {};

  // Serial_Number
  if (!values.Serial_Number) {
    errors.Serial_Number = "The Serial_Number is required ";
  }
  // Name
  if (!values.Name) {
    errors.Name = "This field is required";
  }
  // description
  if (!values.Description) {
    errors.Description = "The Descriptionis required";
  }
  // Address
  if (!values.Address) {
    errors.Address = "The Address  is required ";
  }
  // User_Name
  if (!values.User_Name) {
    errors.User_Name = "This field is required ";
  }
  // Type
  if (!values.Type) {
    errors.Type = "This field is required ";
  }
  if (!values.Account) {
    errors.Account = "The Account is required ";
  }
  if (!values.Status) {
    errors.Status = "The Status  is required ";
  }

  // Email
  /* const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email) {
    errors.email = 'Email Est obligatoire';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Email is invalid';
  }*/

  // Phone number
  const phoneRegex =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  if (!values.PhoneNumber) {
    errors.PhoneNumber = " Phone  number is required ";
  } /* else if (!phoneRegex.test(values.PhoneNumber)) {
    errors.PhoneNumber = "Phone number most be valid";
  }*/

  return errors;
}
