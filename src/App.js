import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Members } from "./components/Members";
import { times } from "./data/times";
import { Footer } from "./components/Footer";

function App() {

  const [members, setMembers] = useState([]);

  const handleFormSubmit = (member) => {
    setMembers((members) => [...members, member]);
  };

  return (
    <div className="App">
      <Banner />
      <Form onSubmit={e => handleFormSubmit(e)} times={times.map(time => time.nome)} />

      {times.map((time, index) => (
        <Members
          key={index}
          name={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          list={members.filter(member => member.time === time.nome)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
