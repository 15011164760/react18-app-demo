/*
 * @Author: yangdongxu
 * @Date: 2026-01-06 17:45:03
 * @LastEditors: yangdongxu
 * @LastEditTime: 2026-01-08 13:35:36
 * @FilePath: \trust-data-space-webd:\react18-app-demo\src\page\Ydx\Game.js
 */
import React, { useState } from "react";
import "./Game.css";
function Square({ value, onSquareClick }) {
	// const [value, setValue] = useState(null);
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}
function Board({ xIsNext, squares, onPlay }) {
	function handleClick(i) {
		console.log("click");
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		const nextSquares = squares.slice();
		if (nextSquares[i]) return;
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		onPlay(nextSquares);
	}
	let status = null;
	const winner = calculateWinner(squares);
	if (winner) {
		status = "Winner:" + winner;
	} else {
		status = "Next player:" + (xIsNext ? "X" : "O");
	}
	console.log(status);
	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}
	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
				<Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
				<Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
			</div>
			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
				<Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
				<Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
			</div>
			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
				<Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
				<Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
			</div>
		</>
	);
}
//zustand useState useRef  useMemo useEffect useImperativeHandle
function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);

	const currentSquares = history[currentMove];
	const xIsNext = currentMove % 2 === 0;
	function handlePlay(nextSquares) {
		// TODO
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}
	function jumpTo(nextMove) {
		// TODO
		setCurrentMove(nextMove);
	}

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});
	return (
		<div>
			<h1>Game</h1>
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

export default Game;
