import { SignIn } from "@clerk/nextjs";

const SignInpage = () => {
  return <SignIn forceRedirectUrl={"/my-journals"} />;
};
export default SignInpage;
