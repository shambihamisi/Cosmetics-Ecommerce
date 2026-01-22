import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl grid grid-cols-1 overflow-hidden border rounded-2xl border-brown bg-white">
        <div className="p-8">
          <div className="text-center">
            <p className="font-belleza font-extrabold text-4xl sm:text-5xl text-brown">
              BELLEZA
            </p>
            <p className="mt-2 font-rufina text-sm text-brown/70">
              {mode === "login"
                ? "Sign in to continue."
                : "Create your account."}
            </p>
          </div>
          
          <div className="mt-8">
            {/* LOGIN */}
            <form className="mx-auto mt-8 max-w-sm space-y-4">
              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-rufina text-brown mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border rounded-2xl border-brown bg-white px-4 py-3 text-sm outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-rufina text-brown mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border rounded-2xl border-brown bg-white px-4 py-3 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-rufina text-brown mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border rounded-2xl border-brown bg-white px-4 py-3 text-sm outline-none"
                />
              </div>

              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-rufina text-brown mb-1">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full border rounded-2xl border-brown bg-white px-4 py-3 text-sm outline-none"
                  />
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-xs font-rufina text-brown/80">
                  <input type="checkbox" className="h-4 w-4 accent-brown cursor-pointer" />
                  Remember me
                </label>

                {mode === "login" && (
                  <button
                    type="button"
                    className="text-xs cursor-pointer font-rufina text-brown underline underline-offset-4"
                  >
                    Forgot password
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-brown py-3 text-sm font-medium uppercase tracking-[0.14em] text-white hover:bg-[#200e02] transition"
              >
                {mode === "login" ? "Sign in" : "Create account"}
              </button>

              <p className="text-center text-xs font-rufina text-brown/70">
                {mode === "login" ? (
                  <>
                    New here?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className="text-brown underline cursor-pointer underline-offset-4"
                    >
                      Create an account
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="text-brown underline underline-offset-4 cursor-pointer"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>

              <p className="text-xs text-center mt-8 font-rufina text-brown/70">
              By continuing you agree to our Terms and Privacy Policy.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LogIn;
