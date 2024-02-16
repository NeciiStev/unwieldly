const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center nt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Alocation</h1>
          <h3>
            {selectedTeam} has {teamMemberCount}{" "}
            {teamMemberCount === 1 ? "member" : "members"}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
