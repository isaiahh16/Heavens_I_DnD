(() => {
	// set up the puzzle pieces and boards
	// buttons ath the bottom of the page

	//const => buttons never change
	const navButtons = document.querySelectorAll("#buttonHolder img")

	//function go here => what we want to have to happen when our triggers fire
	function changeImageSet() {
		//change the thumbnail images on the left to match the drop zone container
		//and set a background image on thw drop zone container
		debugger;
	}

	//add some event handling for the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));

})();
