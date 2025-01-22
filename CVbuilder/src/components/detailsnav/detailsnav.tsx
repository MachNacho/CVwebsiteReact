import { useState } from "react";

const [currentPage, setCurrentPage] = useState<string>("home");




export default function DetailsNavBar() {
  return <>
    <button>Education</button>
    <button>Projects</button>
    <button>Experience</button>
    <button>Achivments</button>
  </>;
}
