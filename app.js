// github oauth register yazaıp enterlerız ve karşımıza çıkan sayfaya uygulamamızın adını,linkini ve tekrar adını yazark yaşil renkli butona tıklıyoruz.
// karşımıza çıkan ekranda new client secret yazan bir buton çıkıyor. bu bizim istek atarken kullanacağımız API key'ini yani anahtarınızı yani kimliğimizi belirtiyor.

// apigithub api doc yazıp aratarak  github apisi ile ilgili detaylı kullanım bilgilerine ulaşabiliriz.
// html'den elemanları tanıtma

//9a2b8d8f09c9d1ea85e08cf0673a1470cbfc614c

//api.github.com/users/diclecakir0/repos?per_page=10 --> bu şekilde istek atarsakbize yanlızca 10 tane istek gelir.

//api.github.com/users/diclecakir0/repos?per_page=10&sort=asc --> iki şekilde filtreleme yapmak istiyorsak , bu link ile en son yaptığımız uygulama geldi.

import Github from './github.js';
import  UI  from './ui.js';

const github = new Github();
const ui = new UI();

console.log(github);

const searchUser = document.getElementById('search-user');
const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', getInput);
searchUser.addEventListener('keypress', (e) => {
if (e.code === 'Enter'){
	getInput();
}
});

function getInput(){
	if (searchUser.value !== ''){
		github.getUser(searchUser.value).then((data) => {
			if(data.profile.message === 'Not Found'){
				ui.showAlert('NOT FOUND USER', 'alert alert-danger');
			} else {
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		});
	} else{
		ui.showAlert('Form alanı boş olamaz', 'alert alert-danger');
		ui.clearProfile();
	}
	
	searchUser.value = '';
}

const themeBtn = document.getElementById('theme');

themeBtn.addEventListener('click', changeTheme);

function changeTheme(){
	const body	= document.querySelector('body');
	body.classList.toggle('bg-dark');
	body.classList.toggle('text-bg-dark');
}