const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('menu--open');
	document.querySelector('.logo-img').classList.toggle('menu--open');
	document.querySelectorAll('.menu-btn span').forEach((item) => {
		item.classList.toggle('menu--open')
	})
});


//Это код для слайдера, который был сделан с помощью swiperjs
//This code is for slider, that was made with swiperjs
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
	breakpoints:{
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
  		spaceBetween: 20,
		}
	}
});
//Это код для слайдера, который был сделан с помощью swiperjs
//This code is for slider, that was made with swiperjs





//Это код для отображения google maps
//This code is for initialization of google maps
let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 37.23216068271583, lng: -8.628551797789044 },
    zoom: 14,
		styles: [
			{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "administrative.province",
					"elementType": "all",
					"stylers": [
							{
									"visibility": "off"
							}
					]
			},
			{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
							{
									"saturation": -100
							},
							{
									"lightness": 65
							},
							{
									"visibility": "on"
							}
					]
			},
			{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
							{
									"saturation": -100
							},
							{
									"lightness": "50"
							},
							{
									"visibility": "simplified"
							}
					]
			},
			{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
							{
									"visibility": "simplified"
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "all",
					"stylers": [
							{
									"lightness": "30"
							}
					]
			},
			{
					"featureType": "road.local",
					"elementType": "all",
					"stylers": [
							{
									"lightness": "40"
							}
					]
			},
			{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
							{
									"saturation": -100
							},
							{
									"visibility": "simplified"
							}
					]
			},
			{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
							{
									"hue": "#ffff00"
							},
							{
									"lightness": -25
							},
							{
									"saturation": -97
							}
					]
			},
			{
					"featureType": "water",
					"elementType": "labels",
					"stylers": [
							{
									"lightness": -25
							},
							{
									"saturation": -100
							}
					]
			}
	]
  });
}

initMap();

//Это код для отображения google maps
//This code is for initialization of google maps