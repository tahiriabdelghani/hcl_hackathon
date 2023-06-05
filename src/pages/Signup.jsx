import React, { useState } from "react";
import { Link } from "react-router-dom";

import AuthImage from "../images/auth-image.jpg";
import CarbonReduction from "../images/carbon-reduction.jpg";
import AuthDecoration from "../images/auth-decoration.png";

function Signup() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [residenceType, setResidenceType] = useState("");
  const [familySize, setFamilySize] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    // Perform sign-up logic here, e.g., sending data to server
    console.log("Sign-up data:", {
      username,
      location,
      workplace,
      residenceType,
      familySize,
    });
  };
  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <defs>
                      <linearGradient
                        x1="28.538%"
                        y1="20.229%"
                        x2="100%"
                        y2="108.156%"
                        id="logo-a"
                      >
                        <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                        <stop stopColor="#A5B4FC" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="88.638%"
                        y1="29.267%"
                        x2="22.42%"
                        y2="100%"
                        id="logo-b"
                      >
                        <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                        <stop stopColor="#38BDF8" offset="100%" />
                      </linearGradient>
                    </defs>
                    <rect fill="#6366F1" width="32" height="32" rx="16" />
                    <path
                      d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                      fill="#4F46E5"
                    />
                    <path
                      d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                      fill="url(#logo-a)"
                    />
                    <path
                      d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                      fill="url(#logo-b)"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="max-w-sm mx-auto px-4 py-8">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">
                Create your Account ✨
              </h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium mb-1"
                    >
                      Username:
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-input w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium mb-1"
                    >
                      Location:
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="form-input w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="workplace"
                      className="block text-sm font-medium mb-1"
                    >
                      Workplace:
                    </label>
                    <input
                      type="text"
                      id="workplace"
                      value={workplace}
                      onChange={(e) => setWorkplace(e.target.value)}
                      className="form-input w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="residenceType"
                      className="block text-sm font-medium mb-1"
                    >
                      Residence Type:
                    </label>
                    <select
                      id="residenceType"
                      value={residenceType}
                      onChange={(e) => setResidenceType(e.target.value)}
                      className="form-input w-full"
                    >
                      <option value="">Select</option>
                      <option value="apartment">Apartment</option>
                      <option value="individualHouse">Individual House</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="familySize"
                      className="block text-sm font-medium mb-1"
                    >
                      Family Size:
                    </label>
                    <input
                      type="number"
                      id="familySize"
                      value={familySize}
                      onChange={(e) => setFamilySize(e.target.value)}
                      className="form-input w-full"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end mt-6">
                  
                  <Link
                    className="btn bg-[#54b653] hover:bg-[#358e2d] text-white ml-3 whitespace-nowrap"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Have an account?{" "}
                  <Link
                    className="font-medium text-[#54b653] hover:text-[#358e2d]"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={CarbonReduction}
            width="760"
            height="760"
            alt="Authentication"
          />
          <img
            className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
            src={AuthDecoration}
            width="218"
            height="224"
            alt="Authentication decoration"
          />
        </div>
      </div>
    </main>
  );
}

export default Signup;
