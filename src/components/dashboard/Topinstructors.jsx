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
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="text-left bg-[#FAFAFA] shadow-md  p-2">
            <th className="p-2">Instructor</th>
            <th className="p-2">Best Course</th>
            <th className="p-2">Students</th>
            <th className="p-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((i) => (
            <tr key={i.name} className="hover:bg-[#F8F8F8] p-3">
              <td className="p-3">{i.name}</td>
              <td className="p-3">{i.course}</td>
              <td className="p-3">{i.students.toLocaleString()}</td>
              {/* <td className="p-3">{<CiStar/>.repeat(Math.floor(i.rating))}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}