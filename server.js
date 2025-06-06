import express from 'express' //impoteer express en liquid package als dependenct via npm

import { Liquid } from 'liquidjs'

const app = express()

app.use(express.urlencoded({extended: true})) //maakt het werken met data uit formulieren prettiger

app.use(express.static('public')) //voor de public map voor statische bestanden zoals CSS, Javascript

const engine = new Liquid() // Liquid als view-engine instellen
app.engine('liquid', engine.express())

app.set('views', './views') //Instellen van de map met de Liquid templates

