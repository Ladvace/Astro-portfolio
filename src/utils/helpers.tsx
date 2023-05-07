export const toggleMobileMenu = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("translate-y-0");
    mobileMenu.classList.toggle("translate-y-full");
  }
};
