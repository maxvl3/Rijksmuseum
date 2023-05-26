# 🎨 ArtFinder | Web App from Scratch herkansing

![cover2](https://github.com/maxvl3/WAFSherkansing/assets/94384526/c7413e39-eac4-4470-bd7f-6a7b15cb9567)

Linkje naar live demo: https://wafsherkansing.vercel.app/
ArtFinder is een herkansing opdracht voor het vak Web App from Scratch. In dit vak leer ik een webapplicatie te bouwen zonder frameworks of onnodige bibliotheken, maar met hoofdzakelijk gebruik van standaard HTML, CSS en JavaScript. Het uiteindelijke resultaat is een modulaire, single-page webapplicatie (SPA). Gegevens worden opgehaald vanuit een externe API, bewerkt en vervolgens weergegeven in de gebruikersinterface van de app.

## 💬 Reflectie eerste beoordeling

Voor mijn eerste beoordeling had ik de kunstwerken van het rijksmuseum verwerkt in een simpele social media app. Hier het linkje naar de repository: https://github.com/maxvl3/rijksmuseum. Helaas was dit eindproduct nog niet goed genoeg om het vak af te sluiten met een voldoende. Hier een overzicht van wat er wel en niet goed was:

Wat was al goed?

- Prima concept
- Duidelijke loading en error state
- JavaScript modules toegepast

Wat moest beter?

- Er ontbrak een zero/empty state
- Er ontbrak een detailpage voor de kunstwerken
- Er was geen data manipulatie toegepast
- Readme was niet volledig

## 🖌 Nieuw concept

Ik heb besloten om voor mijn herkansing het concept iets aan te passen. Voor progressive web apps was ik namelijk bezig geweest met een zoekfunctie vanuit de backend, en het leek mij wel gaaf om hetzelfde te doen maar dan clientside.

ArtFinder maakt het mogelijk om kunstwerken te zoeken uit de datbase van het Rijksmuseum. Gebruikers kunnen zoeken op bijvoorbeeld: kunstenaars, kunstwerken en voorwerpen.

Ik heb ook een concept gemaakt in Figma, zodat ik me minder bezig hoefde te houden met de vormgeving tijdens het bouwen.

![concept2](https://github.com/maxvl3/WAFSherkansing/assets/94384526/1c94ec02-6e03-4a28-9491-992c2bc4912a)

## 🔨 Features

- Gebruik de zoekbalk om te zoeken naar kunstwerken
- Krijg een overzicht van de resultaten
- Klik op een kunstwerk om meer detail te bekijken

## 📈 Wireflow

![wireflow](https://github.com/maxvl3/WAFSherkansing/assets/94384526/d8f78174-556a-4a07-9a69-7bdf8bfab889)

## ⚙️ API Rijksmuseum

Met de Rijksmuseum API kunnen ontwikkelaars de collectie doorzoeken. De API is eenvoudig te gebruiken en vereist een API-sleutel die je kunt verkrijgen door een Rijksstudio-account aan te maken. De Collection API geeft beknopte informatie over objecten, verdeeld over verschillende pagina's. Je kunt parameters gebruiken om de resultaten aan te passen, zoals de paginanummering en het aantal resultaten per pagina.

Hier zijn een aantal beschikbare parameters voor het ophalen van de collectie via de API:

- "key": Je API-sleutel, verplicht voor elke aanvraag.
- "format": Het gewenste formaat van het resultaat (json / jsonp / xml).
- "culture": De taal waarin je wilt zoeken en waarin de resultaten worden weergegeven (nl / en).
- "p": De resultaatpagina. Let op dat "p" vermenigvuldigd met "ps" niet meer dan 10.000 kan zijn.
- "ps": Het aantal resultaten per pagina.
- "q": De zoektermen die moeten voorkomen in een van de velden van de objectgegevens.
- "involvedMaker": Het object moet zijn gemaakt door deze maker.
- "type": Het type object.

Link naar API documentatie: https://data.rijksmuseum.nl/object-metadata/api/

## ☀️ Wishlist

Mocht ik in de toekomst dit project verder willen uitwerken dan zijn er zeker een aantal functionaliteiten die ik wil verwerken:

- Resultaten verdelen in pagina’s of infinity scroll
- Resultaten kunnen filteren
- Een betere loading state ontwerpen
- Nog meer informatie tonen op de detail pagina’s


