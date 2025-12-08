const express = require('express');
const fs=require('fs');
const app=express();
const PORT = 8000
const users=require('./MOCK_DATA.json')

app.use(express.json()); // middleware for post req body parsing
// Express Middleware
// app.use((req, res, next) => {
//     console.log("Hello From Middleware 1"); // This holds the request until next() is called
//     return res.json({ message: "Hello from Middleware 1" });
//     next();
// });

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${new Date().toISOString()} - ${req.ip} - ${req.method} - ${
      req.originalUrl
    }`,
    (err) => {
      if (err) {
        console.error("Failed to write log:", err);
      }
      next();
    }
  );
});


app.get('/api/users', (req, res) => {
    res.setHeader('X-myName', 'Bishnu Thapa'); // custom header with X prefix
    res.json(users);
});

// Route Grouping for /api/users/:id
app.route('/api/users/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id);
        const user = users.find((user) => user.id === id);
        res.json(user)
    })
    .patch((req, res) => {
        return res.json("PENDING")
    })
    .delete((req, res) => {
        return res.json("PENDING")
    });


app.post('/api/users', (req, res) => {
    const body = req.body;
    // save to mock_data.json
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err, data) => { 
        return res.json({status:"success",id:users.length});
    })
})

// app.patch('/api/users/:id', (req, res) => {
//     return res.json("PENDING")
// });

// app.delete('/api/users/:id', (req, res) => {
//     return res.json("PENDING")
// });

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


