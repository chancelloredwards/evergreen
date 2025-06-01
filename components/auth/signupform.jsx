// components/auth/SignUpForm.jsx
"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/signin");
    } else {
      const result = await res.json();
      setError("root", { message: result.error || "Signup failed" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-4"
    >
      <input
        {...register("name", { required: true })}
        placeholder="Full Name"
        className="input"
      />
      {errors.name && <span>Name required</span>}

      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
        className="input"
      />
      {errors.email && <span>Email required</span>}

      <input
        {...register("password", { required: true, minLength: 6 })}
        type="password"
        placeholder="Password"
        className="input"
      />
      {errors.password && <span>Password must be at least 6 characters</span>}

      {errors.root && <span>{errors.root.message}</span>}

      <button type="submit" className="btn-primary">
        Sign Up
      </button>
    </form>
  );
}
