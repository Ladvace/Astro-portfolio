import { createSignal } from "solid-js";
import { routes } from "../config";
import BurgerMenuBtn from "./BurgerMenuButn";
import MobileMenu from "./MobileMenu";
import { isCurrentPath } from "../utils/helpers";

type Props = {
  currentPath: string;
};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <header
        class="fixed lg:hidden bottom-0 left-0 right-0 z-50 transition-transform ease-in-out duration-300 h-screen bg-red-500"
        classList={{
          "translate-y-full": !isOpen(),
          "translate-y-0": isOpen(),
        }}
      >
        <MobileMenu
          currentPath={props.currentPath}
          onChangeRoute={(e, path) => {
            e.preventDefault();
            setIsOpen((prev) => !prev);
            setTimeout(() => {
              window.location.href = path;
            }, 200);
          }}
        />
      </header>
      <header class="fixed overflow-hidden bottom-0 lg:bottom-auto lg:top-0 left-0 right-0 w-full z-50 border-b-2 lg:border-t-2 lg:border-b-0 border-solid border-red-500 backdrop-blur-md">
        <nav
          id="navbar"
          class="w-full flex justify-between items-end px-5 md:px-20 py-6 my-0 mx-auto 2xl:max-w-7xl"
        >
          <div class="overflow-hidden">
            <a
              href="/"
              class="cursor-pointer lg:after:content-[''] lg:after:block lg:after:w-2 lg:after:h-2 lg:after:mt-1 lg:after:rounded-full lg:after:my-0 lg:after:mx-auto"
            >
              <img src="/logo.svg" alt="logo" width="27" height="30" />
            </a>
          </div>
          <ul class="hidden lg:flex text-white gap-4 overflow-hidden font-medium">
            {routes.map((route) => (
              <li
                class="hover:-translate-y-1 transition-transform ease-in-out duration-200"
                classList={{
                  "-translate-y-1": isCurrentPath(
                    props.currentPath,
                    route.slug
                  ),
                }}
              >
                <a
                  href={route.slug}
                  class="cursor-pointer lg:after:content-[''] lg:after:block lg:after:w-2 lg:after:h-2 lg:after:mt-1 lg:after:rounded-full lg:after:my-0 lg:after:mx-auto"
                  classList={{
                    "lg:after:bg-red-500": isCurrentPath(
                      props.currentPath,
                      route.slug
                    ),
                    "opacity-50 hover:after:bg-red-500 after:scale-0 hover:after:scale-100 after:transition-all after:duration-300 after:ease-in-out":
                      !isCurrentPath(props.currentPath, route.slug),
                  }}
                >
                  {route.title}
                </a>
              </li>
            ))}
          </ul>
          <BurgerMenuBtn onChange={(isOpen) => setIsOpen(isOpen)} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
