// Elements:
const btn = document.querySelector('.btn');
const question = document.querySelector('.question');
// Array of answers:
const answersArr = [
	'It is certain',
	'It is decidedly so',
	'Reply hazy try again',
	'Cannot predict now',
	'Do not count on it',
	'My sources say no',
	'Outlook not so good',
	'Signs point to yes',
];
// Functions:
const toggleClass = () => btn.classList.toggle('spin');
const spin = () => {
	toggleClass();
	setTimeout(toggleClass, 1500);
};
const changeText = txt => (btn.innerHTML = `<p class="txt flexbox">${txt}</p>`);
const errorMsg = () => {
	changeText('What is your question?');
	setTimeout(() => changeText('Click me'), 2000);
};
const getAnswer = async () => {
	const i = Math.floor(Math.random() * 8);
	const answer = answersArr[i];
	setTimeout(() => changeText(answer), 1500);
	setTimeout(() => changeText('Try again'), 7000);
};
const handleClick = () => {
	if (!question.value) return errorMsg();
	spin();
	getAnswer();
};
// Event listener:
btn.addEventListener('click', handleClick);
