import add from './one';
import './styles.css/styles.css';
import './styles.css/border.scss';
const ll = 8;

const add1 = async () => {
  return Promise.resolve('working');
};
add1().then((result) => console.log(result));

console.log(JSON.stringify({ name: 'alex', age: ll }));

console.log(add(2, 9));
