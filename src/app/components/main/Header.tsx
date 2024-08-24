import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="  fixed top-0 z-50 w-screen">
      <div className="container flex items-center justify-between text-color-gray font-poppins capitalize py-4 relative z-20 ">
        <Link href='/'>
          <Image
            src="/images/icons/logo.svg"
            alt="logo"
            width={150}
            height={100}
          />
        </Link>
        <div>
          <div className="w-64 border-[1.5px] py-1.5 pr-1 pl-5  border-white/20 rounded-md flex items-center gap-2">
            <Image
              src="/images/icons/searchHeader.svg"
              alt="search"
              width={19}
              height={15}
            />
            <input
              className=" rounded-md bg-inherit h-full flex-1 outline-none text-sm placeholder:text-sm/relaxed "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div>
          <ul className="flex gap-10">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/">movies</Link>
            </li>
            <li>
              <Link href="/">Series</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-16 ">
          <div>
            <button className=" border-[1px] rounded-md px-3.5 py-[5px]">
              Sign in
            </button>
          </div>
          <div>
            <button className="rounded-md px-4 py-[7px] bg-color-primary text-black">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
