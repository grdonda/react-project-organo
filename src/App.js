import { useState } from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Members } from "./components/Members";
import { teams } from "./data/teams";
import { v4 as uuid } from 'uuid';

function App() {

  const [squads, setSquads] = useState(teams);
  const [members, setMembers] = useState([]);

  const handleFormSubmit = (register) => {
    register.id = uuid();
    register.favorite = false;
    setMembers((members) => [...members, register]);
  };

  const handleFormSubmitTime = (register) => {
    register.id = uuid();
    setSquads((squads) => [...squads, register]);
  };

  const handleMemberDelete = (memberToDelete) => {
    console.log("Deleting member:", memberToDelete);
    setMembers((members) => members.filter((member) => member.id !== memberToDelete));
  };

  const handleSquadChangeColor = (name, color) => {
    setSquads(
      squads.map((item) => (item.nome === name ? { ...item, cor: color } : item))
    );
  };

  const handleMemberFavorite = (memberId) => {
    setMembers(
      members.map((member) =>
        member.id === memberId ? { ...member, favorite: !member.favorite } : member
      )
    );
  };

  return (
    <div className="App">
      <Banner />

      <Form
        onSubmit={e => handleFormSubmit(e)}
        onSubmitTime={e => handleFormSubmitTime(e)}
        squads={squads.map(squad => squad.nome)}
      />

      {squads.map((row, index) => (
        <Members
          key={index}
          squad={row}
          listMembers={members.filter(item => item.time === row.nome)}
          onDelete={handleMemberDelete}
          onChangeColor={handleSquadChangeColor}
          onFavorite={handleMemberFavorite}
        />
      ))}
      <Footer />
    </div>

  );
}

export default App;
