import React, { useState } from 'react';
import logo from './logo.svg';
import { Input } from './components/Input';
import { Card } from './components/Card';
import {Page, Aside, FormSection, Main } from './components/styles/PageStyle';

interface User {
  name: string;
  age: number;
  hobby: string;
}

const App = () => {
  const [name, setName] = useState<string>("");
  const [ age, setAge ] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const [usersList, setUsersList] = useState<User[]>([] as User[]);
 
  const addUser = () => {
    const newUser = { name, age, hobby }
    setUsersList([...usersList, newUser])
  }

  return (
    <Page className="App">
      <Aside>
        <img src={logo} className="App-logo" alt="logo" />
          <h2>Cadastro:</h2>
      <FormSection>
        <Input placeholder="Primeiro nome" onChange={(e)=> setName(e.target.value)}/>
        <Input placeholder="Idade" onChange={(e)=> setAge(parseInt(e.target.value))}/>
        <Input label="Hobby:" placeholder="Ex. Jogar volei" onChange={(e)=> setHobby(e.target.value)}/>
        <button onClick={addUser}>Enviar</button>
      </FormSection>
      </Aside>
      <Main>
      <div className="listContainer">
        {usersList.map((user, index)=> <Card key={index} name={user.name} age={user.age} hobby={user.hobby}/> )}
      </div>
      </Main>
    </Page>
  );
}

export default App;
