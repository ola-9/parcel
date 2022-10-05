import { sum } from './modules/sum';

const root = document.querySelector('#root');
root.textContent = sum(10, -1).toString();