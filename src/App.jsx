import React from "react";
import Card from "./components/Card";

const users = [
  {id: 1,img: "/male.svg",name: "Farrux Mengboyev",title: "Frontend Developer",},
  {id: 2,img: "/nizom.svg",name: "Nizomiddin Rahimberdiyev",title: "Web Design",},
  {id: 3,img: "/ilyos.svg", name: "Ilyosbek", title: "Web Developer" },
  {id: 4,img: "/murod.svg",name: "Murodbek Fayzikhanov",title: "Backend Developer",},
  {id: 5,img: "/mirfazil.svg",name: "Mirfazil Mirsharipov",title: "Frontend Developer",},
  { id: 6, img: "/temur.svg", name: "Temur Alixanov", title: "Blogger" },
  { id: 7, img: "/dilshod.svg", name: "dili.me", title: "Blogger" },
  { id: 8, img: "/aslam.svg", name: "Aslamboy", title: "PUBG" },
  { id: 9, img: "/omonxon.svg", name: "Omonxon", title: "Blogger" },
  { id: 10, img: "/isom.svg", name: "Isomtv", title: "YouTuber" },
];

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="pt-10 text-5xl font-bold ml-20">Users</h1>
        <div className="grid grid-cols-2">
        {users.map((user) => (
          <Card key={user.id} img={user.img} name={user.name} title={user.title} />
        ))}
        </div>
      </div>
    </>
  );
};

export default App;
