const fs=require('fs');

// fs.writeFileSync('example.txt','Hello, World!');


// async read file
// doesnot return anything, expects callback
fs.readFile('contacts.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});


//  append file
// fs.appendFile('example.txt', '\nAppended text!', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//         return;
//     }       
//     console.log('Text appended successfully.');
// });