import femaleProfile from "./femaleProfile.jpg";
import maleProfile from "./maleProfile.jpg";

const TeamMemberCard = ({
  employee,
  handleEmployeeCardClick,
  selectedTeam,
}) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employee.gender === "male" ? (
        <img src={maleProfile} className="card-img-top" />
      ) : (
        <img src={femaleProfile} className="card-img-top" />
      )}

      <div className="card-body">
        <h5 className="card-title">FullName: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.Designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
