import React from "react";
import Child from "./Child";
import "./Parent.css";

function Parent() {
  // const name1 = "Satyanarayana";
  // const age1 = 26;
  // const city1 = "Eluru";
  // const role1 = "Front End Developer";
  // const mobile1 = "8179795623";

  // const name2 = "Sudheer";
  // const age2 = 24;
  // const city2 = "Jangareddigudem";
  // const role2 = "Software Developer";
  // const mobile2 = "8179726665";

  // const name3 = "Durgesh";
  // const age3 = 25;
  // const city3 = "Devarapalli";
  // const role3 = "Full Stack Developer";
  // const mobile3 = "9848625323";

  // const name4 = "Kalyan";
  // const age4 = 27;
  // const city4 = "Pallantla";
  // const role4 = "Data analyst";
  // const mobile4 = "9848625323";

  // const name5 = "Srinu";
  // const age5 = 24;
  // const city5 = "Devarapalli";
  // const role5 = "Data Scientist";
  // const mobile5 = "9949595323";

  // Data in Array of objects

  const userDetails = [
    {
      name: "Satyanarayana",
      age: 26,
      city: "Eluru",
      role: "Front End Developer",
      mobile: 8179795623,
    },
    {
      name: "Sudheer",
      age: 24,
      city: "Jangareddigudem",
      role: "Software Developer",
      mobile: 81797926665,
    },
    {
      name: "Durgesh",
      age: 25,
      city: "Devarapalli",
      role: "Full Stack Developer",
      mobile: 9848625323,
    },
    {
      name: "Kalyan",
      age: 27,
      city: "Pallantla",
      role: "Data analyst",
      mobile: 9848625323,
    },
    {
      name: "Srinu",
      age: 24,
      city: "Devarapalli",
      role: "Data Scientist",
      mobile: 9949595323,
    },
  ];

  return (
    <div className="container">
      <h1>User Details :</h1>

      {/* Method - 1 */}

      {/* <Child
        name={name1}
        age={age1}
        city={city1}
        role={role1}
        mobile={mobile1}
      />
      <Child
        name={name2}
        age={age2}
        city={city2}
        role={role2}
        mobile={mobile2}
      />
      <Child
        name={name3}
        age={age3}
        city={city3}
        role={role3}
        mobile={mobile3}
      />
      <Child
        name={name4}
        age={age4}
        city={city4}
        role={role4}
        mobile={mobile4}
      />
      <Child
        name={name5}
        age={age5}
        city={city5}
        role={role5}
        mobile={mobile5}
      /> */}

      {/* Method -2 */}
      {/* Alternative method using map function */}

      <div className="parentContent">
        {userDetails.map((data, index) => {
          // Object Destructuring
          const { name, age, city, role, mobile } = data;
          return (
            <Child
              key={index}
              name={name}
              age={age}
              city={city}
              role={role}
              mobile={mobile}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Parent;
