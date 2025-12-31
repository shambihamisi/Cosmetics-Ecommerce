import React from "react";
import { Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-32 grid grid-cols-1 gap-20 py-10 text-sm sm:grid-cols-3">
          <div>
            <div className="mb-5 text-xl font-medium font-belleza text-[#7a5a2a] sm:text-5xl">
              BELLEZA
            </div>
            <p className="max-w-md font-rufina text-[#856536]">
              This is where elegance meets strength,
              <br />
              and your beauty shows up without
              <br />
              permission.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xl font-medium font-rufina text-[#7a5a2a]">
              COMPANY
            </p>
            <ul className="flex flex-col gap-1 text-[#856536]">
              <li>Home</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xl font-medium font-rufina text-[#7a5a2a]">
              GET IN TOUCH
            </p>

            <p className="text-[#856536]">+254 729 599 659</p>

            <div className="mt-4 flex flex-nowrap items-center gap-3">
              <a
                href="https://x.com/hamisi_shambi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
                className="rounded-lg bg-white p-2 transition-colors duration-200 hover:bg-stone-300"
              >
                <Twitter className="h-5 w-5 text-[#856536]" />
              </a>

              <a
                href="https://www.linkedin.com/in/shambi-hamisi-772686104/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg bg-white p-2 transition-colors duration-200 hover:bg-stone-300"
              >
                <Linkedin className="h-5 w-5 text-[#856536]" />
              </a>

              <a
                href="mailto:shambi.hamisi@gmail.com"
                aria-label="Email"
                className="rounded-lg bg-white p-2 transition-colors duration-200 hover:bg-stone-300"
              >
                <Mail className="h-5 w-5 text-[#856536]" />
              </a>
            </div>
          </div>
        </div>
      </div>

       <div className="border-t border-[#7a5a2a]/20 py-6 text-center text-xs text-[#856536]">
          © {new Date().getFullYear()} BELLEZA. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
