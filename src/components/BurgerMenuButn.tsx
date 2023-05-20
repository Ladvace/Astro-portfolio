import { createSignal } from "solid-js";
import { toggleMobileMenu } from "../utils/helpers";

type Props = {
  onChange: (isOpen: boolean) => void;
};

const BurgerMenuBtn = (props: Props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  return (
    <button
      aria-label="burger menu"
      aria-expanded={isOpen()}
      class="lg:hidden text-gray-500 hover:text-gray-700 cursor-pointer border-none focus:outline-none"
      onClick={() => {
        props.onChange(setIsOpen((prev) => !prev));
      }}
    >
      <svg width="32" height="25">
        <line
          classList={{
            "translate-x-[6px] translate-y-0 rotate-45": isOpen(),
          }}
          x1="0"
          y1="2"
          x2="32"
          y2="2"
          class="stroke-white stroke-2 transition-transform duration-75 ease-in-out"
        />
        <line
          classList={{
            "opacity-0": isOpen(),
          }}
          x1="0"
          y1="12"
          x2="32"
          y2="12"
          class="stroke-white stroke-2 transition-transform duration-75 ease-in-out"
        />
        <line
          classList={{
            "translate-x-[-12px] translate-y-[9px] -rotate-45": isOpen(),
          }}
          x1="0"
          y1="22"
          x2="32"
          y2="22"
          class="stroke-white stroke-2 transition-transform duration-100 ease-in-out"
        />
      </svg>
    </button>
  );
};

export default BurgerMenuBtn;
