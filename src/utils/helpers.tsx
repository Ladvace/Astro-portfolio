export const toggleMobileMenu = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("translate-x-0");
    mobileMenu.classList.toggle("translate-x-full");
  }
};
