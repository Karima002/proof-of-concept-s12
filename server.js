import express from 'express' //impoteer express en liquid package als dependenct via npm

import { Liquid } from 'liquidjs'

const app = express()

app.use(express.urlencoded({extended: true})) //maakt het werken met data uit formulieren prettiger

app.use(express.static('public')) //voor de public map voor statische bestanden zoals CSS, Javascript

const engine = new Liquid() // Liquid als view-engine instellen
app.engine('liquid', engine.express())

app.set('views', './views') //Instellen van de map met de Liquid templates

app.get('/detail/koop/Amsterdam/huis-Apollolaan-11/28', async function (request, response) {
   const id = request.params.id;
    const apiResponse = await fetch('https://fdnd-agency.directus.app/items/f_houses')
    const apiResponseJSON = await apiResponse.json(); // Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
    
    response.render("index.liquid", { 
      huis: apiResponseJSON.data[6], // haal het zesde huis eruit
      likes: apiResponseJSON.data
    })
  })

app.post('/detail/koop/Amsterdam/huis-Apollolaan-11/28', async function (request, response) {
  const id = request.params.id;

  await fetch("https://fdnd.directus.app/items/messages", {
    method: "POST",
    body: JSON.stringify({
      for: "Karima_s13" + name,
      from: 1,
      house_id: id 
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  response.redirect(303, `/detail/koop/Amsterdam/huis-Apollolaan-11/28`);
});


// POST route voor verwijderen like 
app.post('/detail/koop/Amsterdam/huis-Apollolaan-11/28/delete/28', async function (request, response) {
    const id = request.params.id;
    
    await fetch(`https://fdnd.directus.app/items/messages/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    });

    response.redirect(303, `/detail/koop/Amsterdam/huis-Apollolaan-11/28`);
});

app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`http://localhost:${app.get('port')}/detail/koop/Amsterdam/huis-Apollolaan-11/28`)})

