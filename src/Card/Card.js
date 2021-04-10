import React, { useState } from 'react';
import classes from '../App.css';
import Button from './Button';

const card = () => {
	const [
		cardState,
		cardStateHandler
	] = useState({
		indexCount : 0
	});

	const [
		classArr,
		setclassArr
	] = useState({
		cssClass : []
	});

	const changeColorHandler = () => {
		const cardRandom = {
			...classes
		};

		const cardRandomArr = Object.values(cardRandom);

		const Val = cardState.indexCount;

		const abc = [
			...classArr.cssClass
		];

		if (abc.length !== 0) {
			abc.pop();
			abc.push(cardRandomArr[Val]);
		} else {
			abc.push(cardRandomArr[Val]);
		}
		cardStateHandler({ indexCount: (Val + 1) % 5 });
		setclassArr({ cssClass: abc });

		console.log(classes.card + ' ' + classArr.cssClass.join(''));
	};

	return (
		<div className={classes.card + ' ' + classArr.cssClass.join('')}>
			<Button changedColor={changeColorHandler} />
		</div>
	);
};

export default card;
