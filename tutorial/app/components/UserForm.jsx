"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function UserForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errMess, setErrMess] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMess("");
    const res = await fetch("api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      const response = await res.json();
      setErrMess(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h1>Create New User</h1>
        <label>Full Name</label>
        <input
          type="text"
          className="m-2 bg-slate-400 rounded"
          id="name"
          name="name"
          onChange={handleChange}
          required={true}
          value={formData.name}
        />
        <label>Email</label>
        <input
          type="email"
          className="m-2 bg-slate-400 rounded"
          id="email"
          name="email"
          onChange={handleChange}
          required={true}
          value={formData.email}
        />
        <label>Password</label>
        <input
          type="password"
          className="m-2 bg-slate-400 rounded"
          id="password"
          name="password"
          onChange={handleChange}
          required={true}
          value={formData.password}
        />
        <input
          type="submit"
          value={"Create User"}
          className="bg-blue-300 hover:bg-blue-100"
        />
      </form>
      <p className="text-red-500">{errMess}</p>
    </>
  );
}
