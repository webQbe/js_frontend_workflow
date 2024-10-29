// Importing Axios
import axios from 'axios';

// Using async/await
// Axios returns a Promise
const User = async () => {

    // Get an Array with a Single User
    const res = await axios.get('https://randomuser.me/api');

    // Get First Item / User Object
    const user = res.data.results[0];
    console.log(user);

    const template = `User`;  

    return template;

}

// Export to app.js 
export default User;