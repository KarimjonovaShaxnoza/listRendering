import React from "react";
import Card from "./components/Card";

const users = [
  { id: 1, name: "Ali Akmal", img: "male.svg", title: "Frontend Developer" },
  {
    id: 2,
    name: "Malika Qobilova",
    img: "nizom.svg",
    title: "Backend Developer",
  },
  {
    id: 3,
    name: "Diyorbek Norboyev",
    img: "ilyos.svg",
    title: "UI/UX Designer",
  },
  { id: 4, name: "Shahlo Islomova", img: "male.svg", title: "Project Manager" },
  {
    id: 5,
    name: "Kamol Abdurahmonov",
    img: "murod.svg",
    title: "Full Stack Developer",
  },
  {
    id: 6,
    name: "Xurshid Fayzulloyev",
    img: "mirfazil.svg",
    title: "QA Engineer",
  },
  {
    id: 7,
    name: "Madina Jalilova",
    img: "temur.svg",
    title: "DevOps Engineer",
  },
  {
    id: 8,
    name: "Sardor Boboyev",
    img: "dilshod.svg",
    title: "Data Scientist",
  },
  { id: 9, name: "Otabek Soliyev", img: "aslam.svg", title: "Product Owner" },
  {
    id: 10,
    name: "Gulnora Matmurodova",
    img: "omonxon.svg",
    title: "Marketing Specialist",
  },
];

const App = () => {
  return (
    <>
      <div className="container gap-10">
        <h1 className="pt-10 text-5xl font-bold ml-10 ">Users</h1>
        <div className="grid grid-cols-2 gap-20 mb-20 mt-20">
          {users.map((user) => (
            <Card
              key={user.id}
              img={user.img}
              name={user.name}
              title={user.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
