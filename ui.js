class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.loader = document.getElementById('loader');
  }

  showDialog() {
    console.log('ShowDialog');
    this.loader.style.display = 'inline';
  }

  showProfile(user) {
    console.log(user);
    this.profile.style.display = 'inline';
    console.log('HideDialog');
    this.loader.style.display = 'none';
    this.profile.innerHTML = `
        <div class="result-container">
        <div class="div-img">
        <img src="${user.avatar_url} class="result-container-img"/>
        <button id="view-profile">View Profile</button>
        </div>
        <div class="user-data">
        <div class="user-data-buttons">
        <button id="public-repo">Public Repos ${user.public_repos}</button>
        <button id="public-gists">Public Gists ${user.public_gists}</button>
        <button id="public-followers">Followers ${user.followers}</button>
        <button id="public-follwing">Following ${user.following}</button>
        </div>
        <table style="width:100%">
        <tr>
          <td>Company:${user.company}</td>
        </tr>
        <tr>
          <td>WebSite/Blog:${user.blog}</td>
        </tr>
        <tr>
          <td>Location:${user.location}</td>
        </tr> 
         <tr>
        <td>Member Since:${user.created_at}</td>
      </tr>
      </table>
        </div>
        </div>
        `;
    document.getElementById('view-profile').addEventListener('click', function () {
      window.open(user.html_url, "_self")
    });
  }
  hideProfile() {
    this.profile.style.display = 'none';
  }
}