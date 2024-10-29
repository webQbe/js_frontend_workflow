// Importing SASS File
import './scss/app.scss';

// Importing Function 
import Header from './components/header';

// Main Function
const app = () => {

    // Get HTML from Header &
    // Set to index.html header placeholder
    document.getElementById('header').innerHTML = Header();

}

// Init app
app();