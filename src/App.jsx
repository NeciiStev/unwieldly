import * as React from "react";
import "./App.css";
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB",
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        FullName: "Necii Akran",
        Designation: "Frontend Developer",
        Gender: "Male",
        TeamName: "TeamB",
      },
      {
        id: 2,
        FullName: "iecii Akran",
        Designation: "Frontend Developer",
        Gender: "female",
        TeamName: "TeamC",
      },
      {
        id: 3,
        FullName: "pecii Akran",
        Designation: "Frontend Developer",
        Gender: "Male",
        TeamName: "TeamA",
      },
      {
        id: 4,
        FullName: "Necri Akran",
        Designation: "Frontend Developer",
        Gender: "female",
        TeamName: "TeamD",
      },
      {
        id: 5,
        FullName: "Necii Akan",
        Designation: "Frontend Developer",
        Gender: "Male",
        TeamName: "TeamD",
      },
      {
        id: 6,
        FullName: "Ncii Akra",
        Designation: "Frontend Developer",
        Gender: "female",
        TeamName: "TeamA",
      },
      {
        id: 7,
        FullName: "Neci Akrn",
        Designation: "Frontend Developer",
        Gender: "Male",
        TeamName: "TeamC",
      },
      {
        id: 8,
        FullName: "Nkcii Akrjhan",
        Designation: "Frontend Developer",
        Gender: "female",
        TeamName: "TeamB",
      },
      {
        id: 9,
        FullName: "Necreii Askran",
        Designation: "Frontend Developer",
        Gender: "Male",
        TeamName: "TeamC",
      },
      {
        id: 10,
        FullName: "Necgbi Atran",
        Designation: "PHP Developer",
        Gender: "female",
        TeamName: "TeamA",
      },
      {
        id: 11,
        FullName: "Neciczi Afran",
        Designation: "JavaScript Developer",
        gender: "Male",
        TeamName: "TeamD",
      },
      {
        id: 12,
        FullName: "Nfgecii Abran",
        Designation: "Node Developer",
        Gender: "female",
        TeamName: "TeamB",
      },
    ],
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee,
    );

    setEmployees(transformedEmployees);
  }

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
