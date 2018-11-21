import './index.css'
import numeral from 'numeral';

const storedValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${storedValue} for that car`); // eslint-disable-line no-console
