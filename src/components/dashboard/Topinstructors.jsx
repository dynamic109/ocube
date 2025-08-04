// components/TopInstructors.js
import { CiStar  } from "react-icons/ci";
const instructors = [
  { name: "Johnathan Nuel", course: "Graphic Design Basics", students: 113949, rating: 5 },
  { name: "Tomi Falana", course: "Fundamentals of DSLR Photography", students: 89647, rating: 5 },
  { name: "Esther Mark", course: "Creative Writing", students: 57018, rating: 4.5 },
  { name: "Elizabeth Ressler", course: "Plants at Home", students: 32727, rating: 4 },
];

export default function TopInstructors() {
  return (
  <div className="mt-6">
    <h3 className="text-lg font-bold mb-2">Meet the Top Rated Instructors</h3>

    {/* Wrapper for horizontal scroll only on small screens so the ratings go fit show*/}
    <div className="overflow-x-auto md:overflow-x-visible">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="text-left bg-[#FAFAFA] shadow-md">
            <th className="p-2 whitespace-nowrap">Instructor</th>
            <th className="p-2 whitespace-nowrap">Best Course</th>
            <th className="p-2 whitespace-nowrap">Students</th>
            <th className="p-2 whitespace-nowrap">Rating</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((i) => (
            <tr key={i.name} className="hover:bg-[#F8F8F8]">
              <td className="p-3 whitespace-nowrap">{i.name}</td>
              <td className="p-3 whitespace-nowrap">{i.course}</td>
              <td className="p-3 whitespace-nowrap">{i.students.toLocaleString()}</td>
              <td className="p-3 whitespace-nowrap">{i.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}