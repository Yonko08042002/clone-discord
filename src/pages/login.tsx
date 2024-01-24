import bgAuth from "@/assets/bg-auth.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getToken, setToken } from "@/lib/storage";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { LoginSchema } from "@/lib/schema";
import { useState } from "react";
import { signIn } from "@/apis/auth";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";

export function Loader() {
  const isAuth = getToken();
  if (isAuth) {
    return redirect("/channels");
  }
  return null;
}

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
      email: "tin.nguyen@gmail.com",
      password: "!Enouvo123",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async ({
    email,
    password,
  }) => {
    try {
      setIsLoading(true);
      const res = await signIn(email, password);
      setToken(res.data.token);
      console.log(res.data.token);
      navigate("/channels");
    } catch (error) {
      toast.error("Login no success");
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

      <div className="p-2 w-full absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2  max-w-xl md:max-w-3xl ">
        <div className=" p-8 bg-gray-800  flex rounded text-white gap-8">
          <div className="w-full">
            <Link to="/" className="hover:underline inline-flex text-white">
              <ChevronLeft />
              Go Back
            </Link>
            <h1 className="text-primary-foreground/80 text-2xl font-bold text-center ">
              Welcome back!
            </h1>
            <p className="text-primary-foreground/60  text-center ">
              We're excited to see you again!
            </p>
            <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
              <div className="pt-3 ">
                <p className="text-primary-foreground/60 text-xs uppercase font-bold ">
                  Email or numberphone
                </p>
                <Input
                  placeholder=""
                  className="bg-primary-foreground/30 caret-lime-50 text-white h-max rounded"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="my-1 text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="mt-2">
                <p className="text-primary-foreground/60 text-xs uppercase font-bold">
                  Password
                </p>
                <Input
                  type="password"
                  placeholder=""
                  className="bg-primary-foreground/30 caret-lime-50 text-white  h-max rounded"
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
                className="mt-3  w-full  text-l bg-indigo-600 hover:bg-indigo-600/60 rounded"
                type="submit"
                loading={isLoading}
              >
                Login
              </Button>
              <div className="flex space-x-1 mt-2 h-max">
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
          <div className=" flex-col justify-items-center items-center hidden md:block w-max  pt-8">
            <img
              className=" w-30 h-40 rounded-sm mx-auto mb-8 "
              src="https://support.discord.com/hc/user_images/BE8K-8GQx85mQTcloqaqrw.png"
              alt=""
            />

            <h1 className="text-primary-foreground/60  font-bold  text-center text-xl">
              Log in with QR code
            </h1>
            <p className="text-center text-xs">
              Scan this with the <strong>Discord mobile app</strong>to log in
              instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
