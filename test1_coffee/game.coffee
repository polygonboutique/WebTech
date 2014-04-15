root = exports ? this
root.show_alert = () -> alert("Hello! I am an alert box!")

# source: -> http://stackoverflow.com/questions/10458891/calling-functions-defined-with-coffee-script

g_points = 0
g_cards = null
g_gamestart = false

g_cardArray = ['7', '8', '9', '10', 'Bauer(2)', 'Dame(3)', 'König(4)', 'As(11)']
g_pointValue = [7, 8, 9, 10, 2, 3, 4, 11]

root.startGame = () ->
  resetGame()
  g_gamestart = true
  setCards(g_cards)
  setPoints(g_points)
  return


root.setCards = (cards) ->
  if g_gamestart
    document.getElementById("cards").innerHTML = cards
  else
    alert "Bitte starten Sie ein neues Spiel!"
  return

root.setPoints = (points) ->
  document.getElementById("points").innerHTML = points if g_gamestart?
  return

root.getRandomNumber = () ->
  max = g_cardArray.length
  min = 0
  r = Math.floor((Math.random() * max) + min)
  return r

root.resetGame = () ->
  g_points = 0
  g_cards = null
  g_gamestart = false
  return

root.gameStep = () ->
  if g_gamestart
    random = getRandomNumber();

    if g_cards == null
      g_cards = g_cardArray[random]
    else
      g_cards += ", " + g_cardArray[random]

    setCards(g_cards)

    g_points += g_pointValue[random]
    setPoints(g_points)

    if (g_points > 21)
      alert "Sie haben Verloren!\nBitte starten Sie ein neues Spiel!"
      g_gamestart = false
    else if (g_points == 21)
      alert "Sie haben Gewonnen!!\nBitte starten Sie ein neues Spiel!"
      g_gamestart = false

  return