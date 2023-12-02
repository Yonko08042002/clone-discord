import bgAuth from "@/assets/bg-auth.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setToken } from "@/lib/storage";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LoginSchema } from "@/lib/shema";
import { useState } from "react";
import { signIn } from "@/apis/auth";

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "admin@enouvo.com",
      password: "Enouvo@123",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);
      const res = await signIn(email, password);
      setToken(res.data.accessToken);
      navigate("/groups");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full">
      <img
        src={bgAuth}
        alt="#"
        className="w-full h-full object-cover items-center"
      />

      <div className=" absolute top-1/2 left-1/2 w-3/5 h-2/3 -translate-y-1/2 -translate-x-1/2 bg-background p-10 text-primary flex rounded-lg ">
        <div className="w-2/3 pr-20 ">
          <h1 className="text-primary-foreground/80 text-3xl font-bold text-center ">
            Welcome back!
          </h1>
          <p className="text-primary-foreground/60  text-center ">
            We're excited to see you again!
          </p>
          <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-6 ">
              <p className="text-primary-foreground/60 text-l uppercase font-bold pb-3">
                Email or numberphone
              </p>
              <Input
                placeholder=""
                className="bg-primary-foreground/30 caret-lime-50 text-white "
                {...register("email")}
              />
              {errors.email && (
                <p className="my-1 text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="pt-6">
              <p className="text-primary-foreground/60 text-l uppercase font-bold pb-3">
                Password
              </p>
              <Input
                type="password"
                placeholder=""
                className="bg-primary-foreground/30 caret-lime-50 text-white "
                {...register("password")}
              />
              {errors.password && (
                <p className="my-1 text-red-500">{errors.password.message}</p>
              )}
              <p className="text-blue-400 text-sm font-bold mt-2 cursor-pointer hover:underline">
                Forgot Password?
              </p>
            </div>
            <Button
              className="mt-3  w-full p-8 text-xl bg-indigo-600 hover:bg-indigo-600/60 "
              type="submit"
              loading={isLoading}
            >
              Login
            </Button>
            <div className="flex space-x-1 mt-2">
              <p className="text-base text-primary-foreground/60">
                Need a registered account?
              </p>
              <p className="text-blue-400 text-base  cursor-pointer hover:underline">
                <Link to="/register" className="text-sky-500">
                  Registered
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="w-1/3 ">
          <img
            className=" w-56 h-56 rounded-sm ml-10 mt-8  "
            src="https://support.discord.com/hc/user_images/BE8K-8GQx85mQTcloqaqrw.png"
            alt=""
          />
          <p className="text-primary-foreground/60 text-3xl  font-bold mt-8 text-center">
            Log in with QR code
          </p>
        </div>
      </div>
    </div>
  );
}
