// Importing SASS File
import './scss/app.scss';

// Importing Functions 
import Header from './components/header';
import User from './components/user';

// Main Function 
// Add async as User() returns a Promise
const app = async () => {

    // Get content from Header & User
    // Add to index.html placeholders
    document.getElementById('header').innerHTML = Header();

    // Add await as User() returns a Promise
    document.getElementById('user').innerHTML = await User();
}

// Init app
app();