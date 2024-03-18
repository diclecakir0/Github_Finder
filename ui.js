class UI {
	constructor(){
		this.profile = document.getElementById('profile');
	}

	showProfile(user){
    const created_at = new Date(user.created_at).toLocaleDateString()

		this.profile.innerHTML = `
		<div class="container border my-4 p-4">
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid rounded-4 border border-danger border-5"
              src="${user.avatar_url}"
              alt=""
            />
            <a
              href="${user.html_url}"
              target="_blank"
              class="btn btn-warning my-4 w-100 border border-2 border-success"
              >Profile</a
            >
          </div>
          <div class="col-md-9">
            <span class="badge bg-secondary fs-6 ms-5 mt-1"
              >Open Repos: ${user.public_repos}</span
            >
            <span class="badge bg-danger fs-6 ms-5 mt-1">Open Gists: ${user.public_gists}</span>
            <span class="badge bg-warning fs-6 ms-5 mt-1">Followers: ${user.followers}</span>
            <span class="badge bg-info fs-6 ms-5 mt-1">Following: ${user.following}</span>

            <ul class="list-group my-5">
              <li class="list-group-item list-group-item-primary">ABOUT : ${user.bio}</li>
              <li class="list-group-item list-group-item-secondary">
                COMPANY :${user.company}
              </li>
              <li class="list-group-item list-group-item-success">
                WEB SITE :${user.blog}
              </li>
              <li class="list-group-item list-group-item-danger">LOCATION :${user.location}</li>
              <li class="list-group-item list-group-item-warning">
                CREATE ACCOUNT :${created_at}
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div class="container p-3" id="repos"></div>
		`;
	}

  showRepos(repos){
    let output = '<h3 class="fs-1">Latest Repos</h3>';
    repos.forEach((repo) => {
      output +=` 
      <div class="m-3 p-3 bg-info bg-opacity-10 border border-danger rounded">
      <div class="row">
        <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
          <span class="badge bg-warning">STAR : ${repo.stargazers_count}</span>
          <span class="badge bg-info">VIEWERS : ${repo.watchers_count}</span>
          <span class="badge bg-danger">FORKS : ${repo.forks_count}</span>
        </div>
      </div>
    </div>`;
    });
    document.getElementById('repos').innerHTML = output;
  }

	showAlert(message, classname){
		const div = document.createElement('div');

		div.className = 'classname';

		div.innerText = "message";

		const outlet = document.querySelector("#alert")

		outlet.appendChild(div);

		setTimeout(() => {
			this.clearAlert();
		}, 4000)
	}

	clearAlert(){
		const currentAlert = document.querySelector(".alert");

		if(currentAlert){
			currentAlert.remove();
		}
	}

  clearProfile(){
    this.profile.innerHTML = '';
  }
}

export default UI;