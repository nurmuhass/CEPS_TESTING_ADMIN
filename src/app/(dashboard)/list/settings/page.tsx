"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Image from "next/image";
import InputField from "@/components/InputField";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
<div className="flex justify-start items-center min-h-screen bg-gray-100 md:ml-5">
  <div className="bg-white p-4 sm:p-6 md:p-8 rounded-md w-full max-w-2xl shadow-lg md:mt-8">
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
    <h1 className="text-xl font-semibold"></h1>
    <h1 className="text-xl font-semibold"></h1>
      <h1 className="text-xl font-semibold">Settings</h1>

      <div className="flex justify-end gap-4 mb-6">
        <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300">
          Update
        </button>
        <button className="px-4 py-2 bg-red-200 rounded-lg font-semibold text-red-600 hover:bg-red-300">
          Remove
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
          value="Governor Abba Kabir Yusuf"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Welcome Message
        </label>
        <textarea
          rows={3}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
          value="At lorem aliquet vel consectetur fermentum malesuada."
        ></textarea>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Language</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500">
            <option>English</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date Format</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500">
            <option>MM/DD/YYYY</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Time Format</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500">
            <option>12h (am/pm)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500">
            <option>Nigeria</option>
          </select>
        </div>

        <div className="mb-4 col-span-full">
          <label className="block text-sm font-medium text-gray-700">Time Zone</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500">
            <option>West Africa Time (WAT)</option>
          </select>
          <div className="mt-2 text-sm text-gray-500">
            Current Time: 10:02pm
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8 flex-col sm:flex-row">
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600">
            Save Changes
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300">
            Cancel
          </button>
        </div>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 mt-4 sm:mt-0">
          Delete Account
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default StudentForm;
