// Importing Axios
import axios from 'axios';

// Using async/await
// Axios returns a Promise
const User = async () => {

    // Get an Array with a Single User
    const res = await axios.get('https://randomuser.me/api');

    // Get First Item / User Object
    const user = res.data.results[0];
    // Log User Object
    console.log(user);

    // Add HTML template
    const template = `
        <div className="card">
            <img src="${user.picture.large}" />
            <div class="card-body">
                <h1>${user.name.first} ${user.name.last}</h1>
            </div>
        </div>
    `;  

    return template;

}

// Export to app.js 
export default User;