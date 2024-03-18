
class Github{
	constructor(){
		this.client_id = 'e391d0eac2acb9609051';
		this.client_secret = "9a2b8d8f09c9d1ea85e08cf0673a1470cbfc614c";
		this.repos_count = 10;
		this.repos_sort = 'asc';
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

	const repoResponse = await	fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		console.log(profile);
		return {
			profile, repos,
		};
	}
}

export default Github; // bu kod bloğu ile dosyaya diğer dosyalardanda ulaşılabilir olmasını sağladık.