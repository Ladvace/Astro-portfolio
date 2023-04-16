import { createEffect } from "solid-js";
import BurgerMenuBtn from "./BurgerMenuButn";

type Props = {
  currentPath: string;
};

const Navbar = (props: Props) => {
  createEffect(() => {
    console.log("props", props);
  });
  return (
    <header>
      <nav
        id="navbar"
        class="fixed overflow-hidden bottom-0 lg:top-0 left-0 right-0 h-20 w-full flex justify-between items-center px-5 md:px-20 py-6 my-0 mx-auto bg-transparent z-50 border-b-2 lg:border-t-2 lg:border-b-0 border-solid border-red-500"
      >
        <div class="overflow-hidden">
          <a
            href="/"
            class="cursor-pointer lg:after:content-[''] lg:after:block lg:after:w-2 lg:after:h-2 lg:after:mt-1 lg:after:rounded-full lg:after:my-0 lg:after:mx-auto"
          >
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <ul class="hidden lg:flex text-white gap-4 overflow-hidden font-medium">
          <li>
            <a
              href="/"
              class="cursor-pointer lg:after:content-[''] lg:after:block lg:after:w-2 lg:after:h-2 lg:after:mt-1 lg:after:rounded-full lg:after:my-0 lg:after:mx-auto"
              classList={{
                "lg:after:bg-red-500": props.currentPath === "/",
                "opacity-50 hover:after:bg-red-500": props.currentPath !== "/",
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              class="cursor-pointer lg:after:content-[''] lg:after:block lg:after:w-2 lg:after:h-2 lg:after:mt-1 lg:after:rounded-full lg:after:my-0 lg:after:mx-auto"
              classList={{
                "lg:after:bg-red-500": props.currentPath === "/about",
                "opacity-50 hover:after:bg-red-500":
                  props.currentPath !== "/about",
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              class="cursor-pointer lg:after:content-[''] lg:after:block lg:after:w-2 lg:after:h-2 lg:after:mt-1 lg:after:rounded-full lg:after:my-0 lg:after:mx-auto"
              classList={{
                "lg:after:bg-red-500": props.currentPath === "/contact",
                "opacity-50 hover:after:bg-red-500": props.currentPath !== "/contact",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <BurgerMenuBtn />
      </nav>
    </header>
  );
};

export default Navbar;
