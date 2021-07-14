const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);

const [userName, github] = profileDataArgs;




fs.writeFile('./index.html', generatePage(userName, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});







// const printProfileData = profileDataArr => {
//     // This for loop is the same as...
//     for (let i = 0 ; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');
// // Using the foreach() method
//     profileDataArr.forEach(profileItem => console.log(profileItem));
    
// };

// printProfileData(profileDataArgs);