// import path from 'path'
import express  from 'express'
import morgan  from 'morgan'
import { engine } from 'express-handlebars'
const app = express()
const port = 3000

// app.use(express.static(path.join(__dirname, './public')))
app.use(morgan('combined'))
app.use(express.static('src/public'))
//template engine 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/resources/view');

app.get('/', (req, res) => {
     res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})