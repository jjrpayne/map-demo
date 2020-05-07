function createMap(data){
	console.log(data);
	var poi = {lat: data['latitude'], lng: data['longitude']}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: poi
	});

	var marker = new google.maps.Marker({
		position: poi,
		map: map
	});
}

function initMap() {
	fetch('https://jj-poi-api.herokuapp.com/poi')
		.then(result => result.json())
		.then(data => createMap(data));
}

