import type { JSX } from "solid-js";

export type Work = {
  title: string;
  description: string | JSX.Element;
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  onlyYear?: boolean;
};

export const works: Work[] = [
  {
    title: "Company name",
    description:
      "Develop and execute integrated marketing campaigns across various channels",
    startDate: "2023-02-01",
    endDate: "2023-03-02",
  },
  {
    title: "Company name",
    description: (
      <div>
        <h2>Job Title: Marketing Specialist</h2>
        <h4>Job Description:</h4>
        <p>
          ABC Corporation is seeking a highly motivated and creative Marketing
          Specialist to join our dynamic marketing team.
        </p>
        <br />
        <h4 class="font-bold">Responsibilities:</h4>
        <ul class="list-disc list-inside">
          <li>
            Develop and execute integrated marketing campaigns across various
            channels
          </li>
          <li>Conduct market research and competitor analysis</li>
          <li>Create engaging content for marketing materials</li>
          <li>Manage and optimize digital advertising campaigns</li>
          <li>Monitor and analyze marketing metrics</li>
        </ul>
      </div>
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
  title: "Ladvace’s Blog",
  description: "Ladvace’s Blog description",
};

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

export const email = "cavallogianmarco@gmail.com";
export const websiteUrl = "https://astro-personal-portfolio.netlify.app";

export const aboutmeDescription = `I am a software developer with over two years of front-end development
experience. I have worked on both enterprise and open-source software
development projects. I am based in Italy and am currently working as
a freelancer. I code primarily in Solidjs, Javascript, Node.js,
React.js, and other web technologies, but I am always willing to learn
and use the best technology and approach to solve the problem at hand.
`;

export const rssUrl = `${websiteUrl}/rss.xml`