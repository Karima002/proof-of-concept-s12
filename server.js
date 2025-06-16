import express from 'express' //impoteer express en liquid package als dependenct via npm

import { Liquid } from 'liquidjs'

const app = express()

app.use(express.urlencoded({extended: true})) //maakt het werken met data uit formulieren prettiger

app.use(express.static('public')) //voor de public map voor statische bestanden zoals CSS, Javascript

const engine = new Liquid() // Liquid als view-engine instellen
app.engine('liquid', engine.express())

app.set('views', './views') //Instellen van de map met de Liquid templates

app.get('/detail/koop/Amsterdam/huis-Apollolaan-11', async function (request, response) {
    const apiResponse = await fetch('https://fdnd-agency.directus.app/items/f_houses')
    const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
    
    response.render("index.liquid", { 
      huis: apiResponseJSON.data[6], // haal het zesde huis eruit
      likes: apiResponseJSON.data[6]
    })
  })

app.post('/detail/koop/Amsterdam/huis-Apollolaan-11', async function (request, response) {
  await fetch("https://fdnd.directus.app/items/messages", {
    method: "POST",
    body: JSON.stringify({
      for: "Karima_" + request.body.name,
      from: 1
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
      response.redirect(303, '/detail/koop/Amsterdam/huis-Apollolaan-11')

});

app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`http://localhost:${app.get('port')}/detail/koop/Amsterdam/huis-Apollolaan-11`)})
