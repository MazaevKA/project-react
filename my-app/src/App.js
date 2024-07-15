import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export function App() {
	// декларативный
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
      'header',
      { className: 'App-header' },
      createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
      createElement('p'),
      createElement('a', {className: 'App-link', href: 'https://reactjs.org', target: "_blank", rel: 'noopener noreferrer'}, 'Learn React'),
      new Date().toLocaleString()
    ),
	);
}
