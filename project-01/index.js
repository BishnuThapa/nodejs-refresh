const express=require('express');
const app=express();
const PORT = 8000

const users=require('./MOCK_DATA.json')

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


