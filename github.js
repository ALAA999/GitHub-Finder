class GitHub {
    constructor() {
        this.clientId = '94f97fce790d41d8cc92';
        this.clientSecret = 'fdaee4e0fa9a0d18a0663204570b12e93c228339';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=$
        {this.clientId}$client_secret=${this.clientSecret}`);
        const profileData = await profileResponse.json();
        return {
            profileData
        }
    }
}