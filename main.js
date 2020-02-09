var clickedLoginTab = false;

setInterval(function() {
	startTab = document.querySelectorAll('a.tab-login-buy:nth-child(3)')[0];
	if (startTab.classList.contains('active')) {
		console.log('Restarting clicking login tab!');
		clickedLoginTab = false;
	}
	if (!clickedLoginTab) {
		loginTab = document.querySelectorAll('a.tab-login-hotspot:nth-child(4)')[0];
		if (loginTab) {
			loginTab.click();
			// clicking the 'Eingeloggt bleiben' checkbox
			document.querySelectorAll('.check')[0].click();
			// clicking the 'Online gehen' button
			document.querySelectorAll('button.dtag-button-connect:nth-child(7)')[0].click();
		clickedLoginTab = true;
		}
	}
}, 100);


// TODO: Maybe click Ausloggen?
/*
setInterval(function () {
	document.querySelectorAll('div.tab:nth-child(2) > h1:nth-child(1) > span:nth-child(1) > span:nth-child(1)')
}, 200);
*/


/*
With the tabs API, it could be possible to close the tab correctly, but it seems like a lot of work!
Just window.close() below does not work!

setInterval(function() {
	var onlineIndicator = document.querySelectorAll('.online-icon');
	var isOnline = false;
	onlineIndicator.forEach(function(userItem) {
		if (userTime.innerHTML === "V") {
			isOnline = true;
		}
	});
	if (isOnline) {
		window.close();
	}
}, 300);
*/
