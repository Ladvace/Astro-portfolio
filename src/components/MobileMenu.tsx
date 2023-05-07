import { routes } from "../utils/nav";

type Props = {
  currentPath: string;
  onChangeRoute: (e: MouseEvent, path: string) => void;
};

const MobileMenu = (props: Props) => {
  return (
    <nav class="h-full flex items-center pl-6">
      <ul class="text-white flex flex-col items-start gap-5 overflow-hidden font-medium">
        {routes.map((route) => (
          <li>
            <a
              onClick={(e) => props.onChangeRoute(e, route.slug)}
              href={route.slug}
              class="cursor-pointer flex items-center lg:after:content-[''] after:block after:w-4 after:h-4 after:rounded-full after:ml-2 text-4xl font-bold"
              classList={{
                "after:bg-slate-900": props.currentPath === route.slug,
                "opacity-50": props.currentPath !== route.slug,
              }}
            >
              {route.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
