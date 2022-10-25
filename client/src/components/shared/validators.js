const regs = {
  regEmail:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,
  regName: /^[A-Za-z]+([\s'-][a-zA-Z]+)*$/g,
  regPhone: /^\d+$/g,
  regPass: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,}$/g,
};

export const validators = (value) => {
  const { regName, regEmail, regPhone, regPass } = regs;
  // console.log(regName);
  const error = {};
  console.log(value);
  for (let key in value) {
    if (!value[key]) {
      error[key] = "This field is required.";
    }
    if (!regEmail.test(value[key]) && key === "email") {
      error[key] = "Please enter a valid email address.";
    }
    if (!value[key].match(regName) && key === "firstName") {
      error[key] = "Name can not contain symbols and units.";
    } else if (value[key].length < 2 && key === "firstName") {
      error[key] = "The name should contain at least 2 characters.";
    } else if (value[key].length > 30 && key === "firstName") {
      error[key] = " The name should contain a max of 30 characters.";
    }
    if (!value[key].match(regName) && key === "lastName") {
      error[key] = "Surname can not contain symbols and units.";
    } else if (value[key].length < 2 && key === "lastName") {
      error[key] = "The Surname should contain at least 2 characters.";
    } else if (value[key].length > 30 && key === "lastName") {
      error[key] = " The Surname should contain a max of 30 characters.";
    }
    if (!(value[key].match(regPhone) && value[key].length === 9) && key === "phone") {
      error[key] = "Please enter a valid phone number.";
    }
    if (!value[key].match(regPass) && key === "password") {
      error[key] =
        "The Password should contain at least 8 characters, symbol, uper case, lower case";
    }
  }

  return error;
};
