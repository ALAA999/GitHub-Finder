const http = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== '') {
        http.getUser(userText)
            .then(data => {
                if (data.profileData.message === 'Not Found') {
                    alert('Not Found!');
                } else {
                    ui.showDialog();
                    ui.showProfile(data.profileData);
                }
            });
    } else {
        ui.hideProfile();
    }
});