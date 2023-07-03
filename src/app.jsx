import {useEffect, useState} from 'preact/hooks';
import './app.css';

// function genPassword() {
//   let chars =
//     '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let passwordLength = 12;
//   let password = '';
//   for (var i = 0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber + 1);
//   }
//   return password;
// }

// const obj = [...Array(67)].map((_, i) => ({
//   id: i + 1,
//   name: '',
//   password: genPassword(),
// }));

const users = [
  {id: 1, name: 'Адаменко Назар', password: 'h9fL2IHY9ccdX'},
  {id: 2, name: 'Бессонова Юлия', password: 'H5#Ncu^2b1sdV'},
  {id: 3, name: 'Богданов Федор', password: 'GI5rfpL)5ncZB'},
  {id: 4, name: 'Богданова Анастасия', password: 'H1VI!4sd*Ol3r'},
  {id: 5, name: 'Бокаревич Михаил', password: 'rnGpTVU^m1XQr'},
  {id: 6, name: 'Буйневич Виктория', password: '@suOKYTRisf%1'},
  {id: 7, name: 'Буйневич Илья', password: 'j!ceL2&qxux@R'},
  {id: 8, name: 'Варфоломеева Алеся', password: 'L7jkLpojj^aY0'},
  {id: 9, name: 'Гаев Стас', password: '3EZ^hAD$zRc4Q'},
  {id: 10, name: 'Гапеева Тихомира', password: '%%($Wbw!)BsfU'},
  {id: 11, name: 'Гончарук Николай', password: '9c3hesK(uFqFV'},
  {id: 12, name: 'Грищенко Максим', password: 'JsyUsRQS83JVG'},
  {id: 13, name: 'Гулевич Екатерина', password: 'FJ5&TexeVphWo'},
  {id: 14, name: 'Давиденко Дарья', password: 'K0g6eYlGWQ&Qq'},
  {id: 15, name: 'Дашковская Валерия', password: 'kfY)y5JH3vtA7'},
  {id: 16, name: 'Дашковский Андрей', password: 'vPSHKSK!ZpjKT'},
  {id: 17, name: 'Дашковский Даниил', password: 'S1nf$%8w7@$3*'},
  {id: 18, name: 'Дзядок Мария', password: '$dCkLDYUeFSda'},
  {id: 19, name: 'Евтушенко Елизавета', password: 'Q2h1!P$aZSdMM'},
  {id: 20, name: 'Железняк Маргарита', password: 'UU#c((7se5xuM'},
  {id: 21, name: 'Зайцев Илья', password: '8)qj!W2reP!IR'},
  {id: 22, name: 'Зайцев Максим', password: 'v&cdnjTjhopcH'},
  {id: 23, name: 'Зак Анастасия', password: '5*b*x6NFXriZb'},
  {id: 24, name: 'Калиниченко Иосиф', password: 'Vqx1HfR)$P#4h'},
  {id: 25, name: 'Каминский Сергей', password: 'su&zCq%zH#jt!'},
  {id: 26, name: 'Ковгунов Кирилл', password: 'JzPmBQye)nqv7'},
  {id: 27, name: 'Ковгунов Тимофей', password: 'W9cBk4IE)oJYx'},
  {id: 28, name: 'Ковгунова Анастасия', password: 'L@u9@X27uiYNY'},
  {id: 29, name: 'Ковгунова Анастасия', password: 'Y4pE^G%TeQ(fa'},
  {id: 30, name: 'Ковгунова Ксения', password: 'zfuvAEaj!4qso'},
  {id: 31, name: 'Ковгунова Надежда', password: 'V^^K2s1&)AsS)'},
  {id: 32, name: 'Ковгунова Николия', password: 'MTlas5FaUxSFw'},
  {id: 33, name: 'Кортелева Ангелина', password: 'b^ADTkmaWi*)6'},
  {id: 34, name: 'Костренкова Виктория', password: 'h0gx)w7I*gZB!'},
  {id: 35, name: 'Кудря Дарья', password: '!lDdv)IXTiqM5'},
  {id: 36, name: 'Кудря Марина', password: '8vw7j*!FM$UMN'},
  {id: 37, name: 'Курилин Даниил', password: 'Qe&TJVzU*VFjG'},
  {id: 38, name: 'Лапицкий Илья', password: 'TzTWCC!vm7kKi'},
  {id: 39, name: 'Лашкина София', password: 'H9J!R!^(pezbQ'},
  {id: 40, name: 'Луковская Ярослава', password: 'aQyqnEAxE#@Q#'},
  {id: 41, name: 'Маринович Давид', password: 'dCl(nVc5kT1rI'},
  {id: 42, name: 'Махнач Кристиан', password: 'j&&cQEBaTc#0m'},
  {id: 43, name: 'Мисоченко Яна', password: 'kK@$b*8rT4wxe'},
  {id: 44, name: 'Нестерович Макар', password: 'zNQjp10decz#F'},
  {id: 45, name: 'Острицова-Анисимова Анна', password: 'JrNqE#iJ$%NU!'},
  {id: 46, name: 'Острогляд Марта', password: '4xEn6on$7ezby'},
  {id: 47, name: 'Пипченко Пётр', password: '&2dx!oISlWF&1'},
  {id: 48, name: 'Постол Анна', password: ')3HY(GUbHsrX9'},
  {id: 49, name: 'Роднев Виктор', password: 'yXy$%qHWt5bP!'},
  {id: 50, name: 'Роднев Лев', password: 'tw&icZG$hl0Pb'},
  {id: 51, name: 'Рязанцев Андрей', password: 'Yzoy*xh7v$fGg'},
  {id: 52, name: 'Рязанцева Екатерина', password: 'Yg79(d!07cu()'},
  {id: 53, name: 'Сингаевский Михаил', password: 'Clsh^#SnyUykc'},
  {id: 54, name: 'Скрипачева Милана', password: 'JMnKP$r5zUSag'},
  {id: 55, name: 'Степановская Марина', password: 'cb3%vp$eG*hXM'},
  {id: 56, name: 'Судиловский Богдан', password: 'Zy*n2)XZEgZ**'},
  {id: 57, name: 'Титова Дарья', password: 'xK&G8HJuSYMn@'},
  {id: 58, name: 'Урицкая Вероника', password: '9mLxQny5zV*1S'},
  {id: 59, name: 'Чаура Артём', password: 'j3QbwyqOvio!x'},
  {id: 60, name: 'Чумак Варвара', password: 'E7Pnw6X@4fBm3'},
  {id: 61, name: 'Шайкевич Иван', password: 'ztil*H!LDpio#'},
  {id: 62, name: 'Шведов Михаил', password: 'MM*kffT3v8nl4'},
  {id: 63, name: 'Шевченко Артём', password: '1pGiGNQ!iJuvL'},
  {id: 64, name: 'Шевченко Роман', password: 'O37s65Xt6Tidn'},
  {id: 65, name: 'Шпанькова Анна', password: 'xYYn@RykxF7d0'},
  {id: 66, name: 'Яковенко Вениамин', password: 'gX66yD@eT)CSF'},
  {id: 67, name: 'Яковенко Матфей', password: '6dPioYnviZnFH'},
];

export function App() {
  // const [selectUser, setSelectUser] = useState(users[0].name);
  const [winner, setWinner] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState(null);

  const accessCSS =
    access === true ? 'access-true' : access === false ? 'access-false' : '';

  function check(e) {
    e.preventDefault();
    // const userObj = users.find((el) => el.name === selectUser);
    const userObj = users.find((el) => el.name === user.trim());

    if (password === userObj?.password) {
      setAccess(true);
      setWinner(userObj.name);
    } else {
      setAccess(false);
    }

    setUser('');
    setPassword('');
  }

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
      {(winner && (
        <h1>
          {winner},<br />
          кушай ;)
        </h1>
      )) || (
        <h1>
          Телефон, <br /> дай поесть
        </h1>
      )}

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
