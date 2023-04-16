import { toggleMobileMenu } from "../utils/helpers";
import BurgerMenuBtn from "./BurgerMenuButn";

type Props = {
  currentPath: string;
};

const MobileMenu = (props: Props) => {
  return (
    <div
      id="mobile-menu"
      class="flex justify-center items-center fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-dark-500 z-50 transition-transform ease-in-out duration-100 border-b-2 lg:border-t-2 lg:border-b-0 border-solid border-red-500 translate-x-full"
    >
      <header>
        <nav>
          <ul class="text-white flex flex-col items-center gap-5 overflow-hidden font-medium">
            <li>
              <a
                href="/"
                onClick={() => {
                  setTimeout(() => {
                    toggleMobileMenu();
                  }, 50);
                }}
                class="cursor-pointer text-2xl lg:after:content-[''] lg:after:block lg:after:w-2 lg:after:h-2 lg:after:mt-1 lg:after:rounded-full lg:after:my-0 lg:after:mx-auto"
                classList={{
                  "lg:after:bg-red-500": props.currentPath === "/",
                  "opacity-50 hover:after:bg-red-500":
                    props.currentPath !== "/",
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                onClick={() => {
                  setTimeout(() => {
                    toggleMobileMenu();
                  }, 50);
                }}
                class="cursor-pointer text-2xl lg:after:content-[''] lg:after:block lg:after:w-2 lg:after:h-2 lg:after:mt-1 lg:after:rounded-full lg:after:my-0 lg:after:mx-auto"
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
                onClick={() => {
                  setTimeout(() => {
                    toggleMobileMenu();
                  }, 50);
                }}
                class="cursor-pointer text-2xl lg:after:content-[''] lg:after:block lg:after:w-2 lg:after:h-2 lg:after:mt-1 lg:after:rounded-full lg:after:my-0 lg:after:mx-auto"
                classList={{
                  "lg:after:bg-red-500": props.currentPath === "/contact",
                  "opacity-50 hover:after:bg-red-500":
                    props.currentPath !== "/contact",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <span class="fixed bottom-6 right-5 md:right-20">
        <BurgerMenuBtn defaultIsOpened={true} />
      </span>
    </div>
  );
};

export default MobileMenu;
