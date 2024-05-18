const express =require('express')
const app =express()


app.use(express.json())

app.get('/',(res)=>{

   res.json('test 2 ')

})

app.listen(8000,(res)=>{
console.log('tets');
})