export const toggleMobileMenu = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("translate-y-0");
    mobileMenu.classList.toggle("translate-y-full");
  }
};

export const formatDate = (dateString: string) => {
  let date = new Date(dateString);

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  let monthName = monthNames[monthIndex];

  let readableDate = `${day} ${monthName} ${year}`;

  return readableDate;
}

export const getYear = (dateString: string) => {
  let date = new Date(dateString);
  let year = date.getFullYear(); 

  return year;
}

export const isCurrentPath = (currentUrlPath: string, slug: string) => {
  return currentUrlPath === slug || currentUrlPath.startsWith(slug + "/");
};