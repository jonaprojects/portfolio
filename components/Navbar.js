import React from "react";
import Link from "next/link";


const Navbar = (props) => {
  return (
    <nav
      className={`py-4  px-3 mb-11 bg-slate-900 flex flex-row justify-between`}
    >
      <div className="text-lg">
        <Link href="/" className="font-bold">
          Jonathan Shavit
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
