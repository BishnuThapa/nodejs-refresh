const express=require('express');
const app=express();
const PORT = 8000

const users=require('./MOCK_DATA.json')

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    res.json(user)
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


