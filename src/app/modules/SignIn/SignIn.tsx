import React from "react";
import { useDispatch } from "react-redux";

// actions
import { signIn } from "@/app/actions/user.action";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const handleSignIn = (e: React.FocusEvent<HTMLFormElement>) => {
    const studentId = "1700677";
    const password = "Tien@1234";
    e.preventDefault();
    dispatch(signIn({ studentId, password }));
  };
  return (
    <div>
      <form onSubmit={handleSignIn}>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
