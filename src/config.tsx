import type { JSX } from "solid-js";

export type Work = {
  title: string;
  description: string | JSX.Element;
  startDate: string;
  endDate?: string;
  onlyYear?: boolean;
};

export const works: Work[] = [
  {
    title: "Company name",
    description: "job description",
    startDate: "2023-01-01",
    endDate: "2023-01-01",
  },
  {
    title: "Company name",
    description: (
      <ul class="list-disc list-inside">
        <li>TEST 1</li>
        <li>TEST 2</li>
        <li>TEST 3</li>
        <li>TEST 4</li>
      </ul>
    ),
    startDate: "2023-01-01",
    onlyYear: true,
  },
];

export const socials = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/gianmarco-cavallo/",
  },
  {
    title: "Github",
    url: "https://github.com/Ladvace",
  },
  {
    title: "Medium",
    url: "https://medium.com/@ladvace",
  },
];

export const blogInfo = {
  title: 'Ladvace’s Blog',
  description: 'Ladvace’s Blog description',
}

export const routes = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Work",
    slug: "/work",
  },
  {
    title: "Blog",
    slug: "/blog",
  },
  {
    title: "About",
    slug: "/about",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
  {
    title: "Now",
    slug: "/now",
  },
];

export const email = "cavallogianmarco@gmail.com"
export const websiteUrl = "https://gianmarco.xyx"
