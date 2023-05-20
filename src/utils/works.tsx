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
