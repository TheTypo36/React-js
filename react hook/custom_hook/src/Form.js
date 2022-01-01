import React, { useState } from "react";

function useFormLogic(currState) {
  const [value, setValue] = useState(currState);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}

function LoginForm() {
  const email = useFormLogic("");
  const password = useFormLogic("");
  return (
    <div>
      <h2>Sign in</h2>
      <form>
        <p>
          <b>Email:</b>
          <input type="email" {...email} />
        </p>
        <p>
          <b>Password:</b>
          <input type="password" {...password} />
          <p>
            <b>Email:</b>
            {email.value} <b>password:</b>
            {password.value}
          </p>
        </p>
      </form>
    </div>
  );
}

function SignUp() {
  const email = useFormLogic("");
  const password = useFormLogic("");
  const confirmPassword = useFormLogic("");

  return (
    <div>
      <h2>SignUp</h2>
      <form>
        <input type="email" {...email} />
        <input type="password" {...password} />
        <input type="confirmPassword" {...confirmPassword} />
      </form>
      <p>
        <b>Email: </b>
        {email.value}
        <b>password: </b>
        {password.value}
        <b>confirmPassword: </b>
        {confirmPassword.value}
      </p>
    </div>
  );
}
export { LoginForm, SignUp };
