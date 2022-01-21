const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 10;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredValue = prompt("Maximum life for you and the monster", 100);
let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
	chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLogs(ev, val, monsterHealth, playerHealth) {
	let logEntry = {
		event: ev,
		value: Math.floor(val),
		finalMonsterHealth: Math.floor(monsterHealth),
		finalPlayerHealth: Math.floor(playerHealth),
	};

	switch (ev) {
		case LOG_EVENT_PLAYER_ATTACK:
			logEntry.targe = "MONSTER";
			break;
		case LOG_EVENT_PLAYER_STRONG_ATTACK:
			logEntry.targe = "MONSTER";
			break;
		case LOG_EVENT_MONSTER_ATTACK:
			logEntry.targe = "PLAYER";
			break;
		case LOG_EVENT_PLAYER_HEAL:
			logEntry.target = "PLAYER";
			break;
		default:
			logEntry.target = null;
			break;
	}

	/* if (event === LOG_EVENT_PLAYER_ATTACK) {
		logEntry.targe = "MONSTER";
	} else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
		logEntry.targe = "MONSTER";
	} else if (event === LOG_EVENT_MONSTER_ATTACK) {
		logEntry.targe = "PLAYER";
	} else if (event === LOG_EVENT_PLAYER_HEAL) {
		logEntry.target = "PLAYER";
	} */

	battleLog.push(logEntry);
}

function reset() {
	currentMonsterHealth = chosenMaxLife;
	currentPlayerHealth = chosenMaxLife;
	resetGame(chosenMaxLife);
}

function endRound() {
	const initialPlayerHealth = currentPlayerHealth;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentPlayerHealth -= playerDamage;

	writeToLogs(
		LOG_EVENT_MONSTER_ATTACK,
		playerDamage,
		currentMonsterHealth,
		currentPlayerHealth
	);

	if (currentPlayerHealth <= 0 && hasBonusLife) {
		hasBonusLife = false;
		removeBonusLife();
		currentPlayerHealth = initialPlayerHealth;
		setPlayerHealth(initialPlayerHealth);
		alert(`You would be dead, but Bonus life saved you!`);
	}

	if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
		alert("You won!");
		writeToLogs(
			LOG_EVENT_GAME_OVER,
			"PLAYER WON",
			currentMonsterHealth,
			currentPlayerHealth
		);
		reset();
	} else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
		alert("You lost!");
		writeToLogs(
			LOG_EVENT_GAME_OVER,
			"MONSTER WON",
			currentMonsterHealth,
			currentPlayerHealth
		);
		reset();
	} else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
		alert("We have a tie!");
		writeToLogs(
			LOG_EVENT_GAME_OVER,
			"A DRAW",
			currentMonsterHealth,
			currentPlayerHealth
		);
		reset();
	}
}

function attackMonster(mode) {
	let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
	let logEvent =
		mode === MODE_ATTACK
			? LOG_EVENT_PLAYER_ATTACK
			: LOG_EVENT_PLAYER_STRONG_ATTACK;

	/* 	if (mode === MODE_ATTACK) {
		maxDamage = ATTACK_VALUE;
		logEvent = LOG_EVENT_PLAYER_ATTACK;
	} else if (mode === MODE_STRONG_ATTACK) {
		maxDamage = STRONG_ATTACK_VALUE;
		logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
	} */

	const damage = dealMonsterDamage(maxDamage);
	currentMonsterHealth -= damage;

	writeToLogs(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

	endRound();
}

function attackHandler() {
	attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
	attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
	let healValue;
	if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
		alert("You can't heal to more than you max initial health");
		healValue = chosenMaxLife - currentPlayerHealth;
	} else {
		healValue = HEAL_VALUE;
	}

	increasePlayerHealth(healValue);
	currentPlayerHealth += healValue;

	writeToLogs(
		LOG_EVENT_PLAYER_HEAL,
		healValue,
		currentMonsterHealth,
		currentPlayerHealth
	);

	endRound();
}

function printLogHandler() {
	/* for (let i = 0; i < battleLog.length; i++) {
		console.log(battleLog[i]);
	} */

	/* 	for (const logEntry of battleLog) {
		console.log(logEntry);
	} */

	let j = 0;
	while (j < 3) {
		console.log(j);
		j++;
	}

	let k = 0;
	do {
		console.log(k);
	} while (k > 0);

	/* 	let i = 0;
	for (const logEntry of battleLog) {
		console.log(`#${i}`);
		for (const key in logEntry) {
			console.log(`${key} : ${logEntry[key]}`);
		}
		i++;
	} */
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
