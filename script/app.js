(() => {
	// set up the puzzle pieces and boards
	// buttons ath the bottom of the page

	//const => buttons never change
	const navButtons = document.querySelectorAll("#buttonHolder img"),
		puzzlePiece = document.querySelectorAll('.puzzle-pieces img'),
		puzzleBoard = document.querySelector('.puzzle-board');
	//store the image names here
	const pieces = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
	//function go here => what we want to have to happen when our triggers fire
	function changeImageSet() {
		//change thumbnail images on the left to match the button image 
	pieces.forEach((piece, index) => puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`);
		//change the thumbnail images on the left to match the drop zone container
		//and set a background image on thw drop zone container
		//debugger;
		puzzleBoard.style.backgroundImage = `url(images/background${this.dataset.puzzleindex}.jpg)`;
	}

	//add some event handling for the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));
	
})();
