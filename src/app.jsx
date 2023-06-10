import {useEffect, useState} from 'preact/hooks';
import './app.css';

const users = [
  {id: 1, name: 'Вася', password: '12345678'},
  {id: 2, name: 'Саша', password: '87654321'},
  {id: 3, name: 'Митя', password: '55555555'},
];

export function App() {
  // const [selectUser, setSelectUser] = useState(users[0].name);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState(null);

  const accessCSS =
    access === true ? 'access-true' : access === false ? 'access-false' : '';

  function check(e) {
    e.preventDefault();
    // const userObj = users.find((el) => el.name === selectUser);
    const userObj = users.find((el) => el.name === user);

    if (password === userObj?.password) {
      setAccess(true);
    } else {
      setAccess(false);
    }

    setPassword('');
  }

  // useEffect(() => {

  //   return () => {

  //   }
  // }, [ ]);

  return (
    <>
      <div className={`result-bg ${accessCSS}`}>
        <svg
          class="svg-sun"
          version="1.1"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMinYMin meet"
        >
          <circle cx="50" cy="50" r="35" id="sun"></circle>
        </svg>
      </div>

      <h1>
        Телефон, <br /> дай поесть
      </h1>
      <form onSubmit={check}>
        {/* <select
          onChange={(e) => {
            setSelectUser(e.target.value);
          }}
        >
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select> */}
        <input
          type="text"
          value={user}
          onInput={(e) => {
            setUser(e.target.value);
          }}
          placeholder="Введи имя"
        />
        <input
          type="text"
          value={password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Введи пароль"
        />
        <input type="submit" value={access ? '😊' : '🥺'} />
      </form>
    </>
  );
}
