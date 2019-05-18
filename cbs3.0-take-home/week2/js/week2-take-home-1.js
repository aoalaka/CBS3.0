/*jshint esversion: 6 */
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
        // 1
		let x = e.clientX;
		let y = e.clientY;

        // 2
		let buttonTop = e.target.offsetTop;
		let buttonLeft = e.target.offsetLeft;

        // 3
		let xInside = x - buttonLeft;
		let yInside = y - buttonTop;

        let circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 500);
	});
});