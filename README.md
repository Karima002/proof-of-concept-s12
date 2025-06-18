# Funda: detail listing page
De opdracht voor Funda bestond uit een interactieve detailpagina van een huis aan de Apollolaan. Het doel was om een pagina te maken waar gebruikers eenvoudig alle belangrijke informatie over een woning kunnen bekijken gebasseerd op een bestaande nieuwe design

## Impressies van de website
**Desktop**
![Scherm­afbeelding 2025-06-18 om 22 02 49](https://github.com/user-attachments/assets/59365649-e070-4996-b96f-f885d5df4031)

**Mobiel**
![image](https://github.com/user-attachments/assets/7c66e075-00be-4ef0-8625-c3e3c31598f3)

## Kenmerken: interacties

### Mediaviewer met een carousel
Met de mediaviewer kan de bezoeker meerdere foto's en video's bekijken in een carousel. De carousel is progressive enhanced en werkt met HTML en CSS. CSS properties die ik heb gebruikt zijn `overscroll-behavior-x`, `scroll-snap-type: x mandatory;`, `scroll-snap-align: center;`. Voor meer informatie kan je (deze)[https://developer.chrome.com/blog/carousels-with-css?hl=nl] bron raadplegen.

Voor de carousel heb ik een fallback toegevoegd voor oudere browsers. Browsers die geen `scroll-snap-type: x mandatory` ondersteunen wordt `overflow-x: scroll` gebruikt. Hiermee wordt een horizontale scrollbar toegevoegd, zodat gebruikers door de items kunnen scrollen wanneer scroll-snap-type niet beschikbaar is. Of een browser `scroll-snap-type: x mandatory` ondersteunt is te zien via deze bron: [Can I use bron](https://caniuse.com/?search=scroll-snap-type). 


https://github.com/user-attachments/assets/66cf24ba-1498-480c-a6e3-adbbd97cbf4e



### Toon meer-beschrijving 
Dit is een interactie voor het weergeven van de omschrijving van een huis. Er is eerst alleen een deel van de tekst te zien. Als de bezoeker op 'lees de volledige omschrijving klikt' wordt de volledige omschrijving weergegeven.  Voor het tonen van de volledige omschrijving heb ik gebruik gemaakt van een checkbox. `input type "checkbox` wordt gebruikt om de staat van de tekst (uitgeklapt of ingeklapt) te bepalen. De CSS-selector :checked zorgt ervoor dat de beschrijving alleen wordt getoond als de checkbox is aangevinkt. Voor de pleasurable laag heb ik een transition met opacity toegevoegd bij het uitklappen van de tekst. 


https://github.com/user-attachments/assets/ec20482f-d874-4846-8053-b5ce1f8bea1f

### Hover-effecten
Op verschillende buttons is er een hover toegevoegd als feedback voor de gebruiker dat er op de button geklikt kan worden. Ook worden klikbare linkjes underlined na een hover. 


https://github.com/user-attachments/assets/dba1ea7b-03a7-46a9-af00-8f69b4b4a590

### Google Maps Iframe
Voor het tonen van de Google maps kaart gebruik ik een iframe. De iframe is responsief gemaakt met CSS, zodat de kaart correct schaalt op verschillende apparaten. Gebruikers kunnen de buurt en omgeving van de woning verkennen zonder de pagina te verlaten. Ook is er een link toegevoegd om de reistijd te berekenen op Google Maps.

https://github.com/user-attachments/assets/114c2784-cd87-4c37-95f4-b33d4aced5bd

### FAQ
Voor de interactie in de FAQ-sectie heb ik een simpele oplossing gekozen door gebruik te maken van een checkbox. Dit zorgt ervoor dat vragen en antwoorden zonder JavaScript kunnen worden in- en uitgeklapt. Elke vraag in de FAQ heeft een gekoppelde checkbox. Wanneer de checkbox wordt aangevinkt, wordt het bijbehorende antwoord zichtbaar. Door CSS-selector :checked te gebruiken, wordt het antwoord zichtbaar als de checkbox is aangevinkt.


https://github.com/user-attachments/assets/af6410a4-b81a-464b-9050-3ac444189831


 
## Technieken
Frontend: HTML en CSS voor responsieve en interactieve elementen.

Backend: NodeJS en Express voor server-side en routing.

Template-engine: Liquid, gebruikt voor dynamische weergave van gegevens.

Directus: gebruikt voor het beheren van content zoals woningdetails en afbeeldingen.


## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
