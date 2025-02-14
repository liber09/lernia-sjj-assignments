# Util-funktioner

## `feedback(guess, correctWord)`
Kontrollera vilka bokstäver från det ena ordet som förekommer i det andra och i så fall var.

En array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet, med följande attribut:
* `letter` (bokstaven)
* `result` (ett av följande värden)
  * `incorrect`: Finns inte med i det andra ordet
  * `misplaced`: Finns med i det andra ordet, men på annan plats
  * `correct`: Korrekt plats i det andra ordet


### Lösningsstrategi
Jag arbetar testdrivet.
Jag skriver ett test för varje ny aspekt av funktionen, och ser serdan till att det fungerar.

Det leder till en heltäckande testsvit.

Det innebär också att jag behöver bryta ner i flera moment som jag måste kunna lösa:

1. Loopa igenom bokstäver
2. Hitta bokstäver från ett ord i ett annat
3. Avgöra om en bokstav är på samma plats i båda orden, eller på olika platser
4. Bygga en array


## `getRandomWord(length, allowRepeating, allWords)`
Väljer slumpmässigt ut ett ord med `length` bokstäver.
Om `allowRepeating` är `true` så kan samma bokstav förekomma
flera gånger, annars måste varje bokstav vara unik.

### Lösningsstrategi
Jag arbetar testdrivet.
Jag skriver ett test för varje ny aspekt av funktionen, och ser sedan till att det fungerar.

Det leder till en heltäckande testsvit.

Följande moment måste jag kunna lösa:

1. Välja ut slumpat ord ur en lista av ord
2. Upptäcka om ett ord har bokstäver som förekommer mer än en gång
3. Filtrera ut ord med en viss längd