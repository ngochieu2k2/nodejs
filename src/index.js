import path from 'path'
import express  from 'express'
import booskrouter from "./routes/product.js"
import commentrouter from "./routes/comment.js"
import viewProductRouter from './routes/viewproducts.js'
import authrouter from './routes/auth.js'
import morgan  from 'morgan'
import { engine } from 'express-handlebars'
import { fileURLToPath } from 'url'
const app = express()
const port = 3000
const __filename =  fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.json())
// app.use(express.static(path.join(__dirname, './public')))
app.use(morgan('combined'))
app.use(express.static('src/public'))
//template engine 
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/view'));

app.use('/auth',authrouter)
app.use("/api/books",booskrouter)
app.use("/api/comment",commentrouter)
app.use("/api/books",viewProductRouter)

app.get('/', (req, res) => {
     res.render('home');
})

app.get('/detail/:id/:isbn', (req, res) => {
  res.render('detail');
})

app.get('/product', (req, res) => {
  res.render('product');
})

app.get('/search/:value', (req, res) => {
  res.render('search');
})

app.get('/login', (req, res) => {
  res.render('login',{layout:""});
})

app.get('/register', (req, res) => {
  res.render('register',{layout:""});
})

app.get('/admin/login', (req, res) => {
  res.render('admin/loginadmin',{layout:""});
})

app.get('/admin', (req, res) => {
  res.render('admin/home',{layout:"admin"});
})

app.get('/admin/product', (req, res) => {
  res.render('admin/product',{layout:"admin"});
})

app.get('/admin/product/detail/:isbn', (req, res) => {
  res.render('admin/detailadmin',{layout:"admin"});
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})