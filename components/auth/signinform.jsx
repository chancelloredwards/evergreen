// components/auth/SignInForm.jsx
"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res.error) {
      setError("root", { message: "Invalid credentials" });
    } else {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-4"
    >
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
        className="input"
      />
      {errors.email && <span>Email required</span>}

      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
        className="input"
      />
      {errors.password && <span>Password required</span>}

      {errors.root && <span>{errors.root.message}</span>}

      <button type="submit" className="btn-primary">
        Sign In
      </button>
    </form>
  );
}
