let express=require('express');
let mongoose=require('mongoose');
let expresslayout=require('express-ejs-layouts');
let session=require('express-session');
const { json,} = require('body-parser');
let UserApiRouter=require('./Routes/api/users')
let userauth=require('./Routes/user_authentication');
let app=express();
app.use(json());
app.use(express.static('Public'));
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');


app.use(session({
    secret:'Session Key',
    cookie:{maxAge:9000000},
    saveUninitialized:false,
}))

app.use((req,res,next)=>{
res.locals.user=req.session.user;
next();
})

app.use(expresslayout)

app.use('/api/users',UserApiRouter);
app.use('/',userauth);

app.get('/',(req,res)=>{
    res.render('Home')
})


mongoose.connect('mongodb://127.0.0.1/SemesterProject').then(()=>{
    console.log('Connection to MongoDb Successfully Established')
}).catch(()=>{
    console.log('Error while connecting to database...')
})

app.listen(3000)