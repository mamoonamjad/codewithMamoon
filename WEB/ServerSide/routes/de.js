const express =require('express')

const router = express.Router()

//A
router.get('/api/calculator/add', (req, res) => {
    const { a, b } = req.body
    const result = parseInt(a) + parseInt(b)
    res.send({ result })
}

//B
router.get('/api/calculator/add/No:1/No:2', (req, res) => {
const{No1, No2} = req.params
const result = parseInt(No1) + parseInt(No2)
res.send({ result })
})

//C
router.post('/api/calculator/add', (req, res) => {
        let cal= new Calculator()
        cal.a = "WHodaa"
        cal.b = 6
        if (cal.a != Number) {
            res.send("Please enter a number")
    })




    router.post('/book/add', async(req,res)=>{
        let book= new Book(req.body)
        await book.save()
        res.send(book)
    })