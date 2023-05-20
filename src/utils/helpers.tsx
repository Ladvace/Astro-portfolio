export const toggleMobileMenu = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("translate-y-0");
    mobileMenu.classList.toggle("translate-y-full");
  }
};

export const formatDate = (dateString: string) => {
  let date = new Date(dateString);

  let day = date.getDate();  // gets the day of the month
  let monthIndex = date.getMonth();  // gets the month index, where 0 is January and 11 is December
  let year = date.getFullYear();  // gets the year

  // array of month names
  let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  // get the name of the month from the array
  let monthName = monthNames[monthIndex];

  // construct the readable date string
  let readableDate = day + ' ' + monthName + ' ' + year;

  return readableDate;
}

export const isCurrentPath = (currentUrlPath: string, slug: string) => {
  return currentUrlPath === slug || currentUrlPath.startsWith(slug + "/");
};