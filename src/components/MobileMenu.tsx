import { toggleMobileMenu } from "../utils/helpers";
import { routes } from "../utils/nav";
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
            {routes.map((route) => (
              <li>
                <a
                  onClick={() => {
                    setTimeout(() => {
                      const mobileMenu = document.getElementById("mobile-menu");
                      if (mobileMenu) {
                        mobileMenu.classList.remove("translate-x-0");
                        mobileMenu.classList.add("translate-x-full");
                      }
                    }, 50);
                  }}
                  href={route.slug}
                  class="cursor-pointer lg:after:content-[''] after:block after:w-2 after:h-2 after:mt-1 after:rounded-full after:my-0 after:mx-auto"
                  classList={{
                    "after:bg-red-500": props.currentPath === route.slug,
                    "opacity-50": props.currentPath !== route.slug,
                  }}
                >
                  {route.title}
                </a>
              </li>
            ))}
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
