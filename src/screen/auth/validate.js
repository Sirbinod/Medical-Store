const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email field shouldn’t be empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password field shouldn’t be empty";
  } else if (values.password.length < 5) {
    errors.password = "The password should be greater than 6";
  }
  if (!values.npassword) {
    errors.npassword = "New Password field shouldn’t be empty";
  } else if (values.npassword.length < 5) {
    errors.npassword = "The new password should be greater than 6";
  } else if (values.npassword === values.password) {
    errors.npassword = "Old Password and New Password same";
  }

  if (!values.semail) {
    errors.semail = "Email field shouldn’t be empty";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.semail = "Invalid email address";
  }

  if (!values.spassword) {
    errors.spassword = "Password field shouldn’t be empty";
  } else if (values.spassword.length < 5) {
    errors.spassword = "The password should be greater than 6";
  }
  if (!values.firstname) {
    errors.firstname = "First Name field shouldn’t be empty";
  }
  if (!values.lastname) {
    errors.lastname = "Last Name field shouldn’t be empty";
  }
  // if (!values.phone) {
  //   errors.phone = "phone Number field shouldn’t be empty";
  // } else if (values.password.length == 10) {
  //   errors.phone = "The phone Number should be 10 ";
  // }
  return errors;
};

export default validate;
