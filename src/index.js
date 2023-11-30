import path from 'path'
import express  from 'express'
import morgan  from 'morgan'
import { engine } from 'express-handlebars'
import { fileURLToPath } from 'url'
const app = express()
const port = 3000
const __filename =  fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// app.use(express.static(path.join(__dirname, './public')))
app.use(morgan('combined'))
app.use(express.static('src/public'))
//template engine 
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/view'));



app.get('/', (req, res) => {
     res.render('home');
})

app.get('/detail', (req, res) => {
  res.render('detail');
})

app.get('/admin', (req, res) => {
  res.render('admin/home',{layout:"admin"});
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})