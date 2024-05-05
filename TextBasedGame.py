'''
movies = {
  "HarryPotter1":{
    "grossInUSDfirst2weeks":[12304,15832]
  }
}
# These are dictionaries, used to store different types of values and grouping them
print(movies["HarryPotter1"]["grossInUSDfirst2weeks"][0])
# The above is pretty self explanatory
'''
monsterDead = False
monsterHealth = 3
playerMoved = 0
Dead = False
monsterBlind = False

def instructions():
  print("Instructions:")
  print("Type north to go north")
  print("Type east to go east")
  print("Type west to go west")
  print("Type south to go south")
  print("Type up to go up")
  print("Type down to go down")
  print("Type search to search things throughout the room")
  print("Type map to check where you are.")
  print("Type look to look at your surroundings")
  print("The directions at the end of each description are the places you can go")
  print("Type backpack to check your backpack")
  print("Type use to use something from your backpack\n")
playerInfo = {
  "inventory" : ["knife", "medicine","map"],
  "health" : 3 ,
  "currentplace" : "mansion"
}

map = {
  "mansion" : {
    "up" : "hall",
    "down" : "basement",
    "north": "entranceroom"
  },
  "entranceroom": {
    "south": "mansion"
  },
  "hall": {
    "down": "mansion",
    "west": "mainroom",
    "north": "kidsroom",
    "east": "storage"
  },
  "mainroom": {
    "east": "hall"
  },
  "kidsroom": {
    "south": "hall"
  },
  "storage": {
    "west": "hall"
  },
  "basement": {
    "up" : "mansion",
    "down": "secretroom"
  },
  "secretroom": {
    "up": "basement"
  }
}

description = {
  "mansion": "You woke up in this big mansion, you have mild memories of being in the bus tired, someone may have taken you in there, the entrance is in the north and locked up. Upstairs you see a hall with the lights on, you also see more stairs that take you to the basement. (north, up or down)",
  "entranceroom": "You have a big door in front of you (south)",
  "hall":"Upstairs there's a hall with 3 rooms, one at the north, and 2 in the sides. (down, west, north or east)",
  "mainroom":"It looks like the main room, it has a big bed and a mirror, not much to see here. (east)",
  "kidsroom":"This one looks like a children's room, it's full of toys. (south)",
  "storage":"It seems like some kind of storage, you see a lot of things here.(west)",
  "basement":"This room only has a few boxes and small hidden path that goes down.(up or down)",
  "secretroom":"You find a hidden room. (up)"
}

dialogueswhenyousearch = {
  "mansion" : "Wow! You found nothing.\n",
  "entranceroom":"It's a rather small room with only a locked door.",
  "hall": "Nothing here bud\n",
  "mainroom": "While searching you accidentally hit yourself with the mirror and lost 1hp.\n",
  "kidsroom": "You tried searching but stood on a lego and lost 1hp.\n",
  "storage": "You found a note that says 08312, it may be a code for something.\n",
  "basement": "You opened a box and found a big monster.\n",
  "secretroom": "You find a safe with a 5 digit code."
}

#if "down" in map["mansion"]:
#  print("works")
  




def look():
  print(description[playerInfo["currentplace"]])
  print()

def go(direction):
  global playerMoved
  if direction in map[playerInfo["currentplace"]]: 
    playerInfo["currentplace"] = map[playerInfo["currentplace"]][direction]
    look()
    playerMoved = playerMoved + 1

  else:
    print("There's nothing there...")
    print()

directions = ["north", "west", "east", "south", "up", "down"]



def search():
  global monsterDead
  global Dead
  global monsterHealth
  global monsterBlind
  if playerInfo["currentplace"] == "basement" and monsterDead == True:
    print("You search throughout the boxes and find a letter without a recipient....\n",)
    #
    #
    #
    #
    #
    
  else:
    print(dialogueswhenyousearch[playerInfo["currentplace"]])
  #
    if playerInfo["currentplace"] == "secretroom":
      knowsCode = input("Do you know the code?\n")
      if knowsCode == "yes":
        inputCode = input("\nInput the code...\n")
        if inputCode == "08312":
          print("\nYou got a key!\n")
          playerInfo["inventory"].append("key")
        else:
          print("Incorrect code.")
      else:
        print("Don't waste my time then.")
        #
    elif playerInfo["currentplace"] == "entranceroom":
      wantExit = input("Do you want to exit?\n")
      if wantExit == "yes":
        if "key" in playerInfo["inventory"]:
          print("\nYou were able to exit the mansion, congratulations!")
          playerInfo["currentplace"] = "outside"
        else:
          print("\nYou don't have a key to open the door...\n")
      else:
        print("\nWhy are you here then?\n")
        #
    elif playerInfo["currentplace"] == "kidsroom":
      playerInfo["health"] = playerInfo["health"] -1
    elif playerInfo["currentplace"] == "mainroom":
      playerInfo["health"] = playerInfo["health"] -1
    #
    elif playerInfo["currentplace"] == "basement" and monsterDead == False:
      wantFight = input("Do you want to fight the monster or escape\n")
      if wantFight == "escape":
        print("\nYou escaped...\n")
      elif wantFight == "fight":
        while monsterDead == False:
          if monsterBlind == False:
            print("\nThe monster attacks you and you lose 1hp\n")
            playerInfo["health"] = playerInfo["health"]-1
          else:
            print()
          if playerInfo["health"] == 0:
            Dead = True
            break
          elif monsterHealth == 0:
            monsterDead = True
            print("You succesfully killed the monster, try searching more through the room now.\n ")
          else:
            whatToDo = input("You have 3 options:\n" + "  Use something from your backpack\n" + "  Try fighting with your bare hands\n" + "  Accept your death\n" + "  (backpack, hands, die)\n\n")
            if whatToDo == "backpack":
              print("\nThis is what you have in your backpack:")
              print(playerInfo["inventory"])
              print()
              objectToUseBoss = input("What do you want to use?\n")
              if objectToUseBoss == "knife":
                print("\nYou used the knife to stab the monster and it lost 1 hp")
                monsterHealth = monsterHealth - 1
                print("The monster now has " + str(monsterHealth) + " hp")
              elif objectToUseBoss == "medicine":
                howToUseMedicine = input("\nAre you going to use the medicine for personal use or to attack? (personal, attack)\n")
                if howToUseMedicine == "personal":
                  print("\nYou healed yourself!\n")
                  playerInfo["health"] = 3
                elif howToUseMedicine == "attack":
                  print("\nYou blinded the monster, he struggles to attack you now")
                  monsterBlind = True
              elif objectToUseBoss == "map":
                print("\nNothing you can do with a piece of paper, the monster kills you.")
                playerInfo["health"] = 0
              elif objectToUseBoss == "key":
                print("\nYou try to stab the monster with the key but it isn't sharp enough and you die")
                playerInfo["health"] = 0
            elif whatToDo == "hands":
              print("\nYou aren't strong enough, the monster bites you and kills you.")
              playerInfo["health"] = 0
            elif whatToDo == "die":
              print("\nYou accept your death, and die without any struggles.\n")
              playerInfo["health"] = 0
            
        
        
      

      
    '''
    elif playerInfo["currentplace"] == "basement" and monsterDead == False:
      wantFight = input("Do you want to fight the monster or escape\n")
      if wantFight == "escape":
        print("\nYou escaped...\n")
      elif wantFight == "fight":
        print("\nThe monster is slowly getting close to you, what will you do?\n")
        whatToDo = input("You have 3 options:\n" + "  Use something from your backpack\n" + "  Try fighting with your bare hands\n" + "  Accept your death\n" + "  (backpack, hands, die)\n\n")
        if whatToDo == "backpack":
          print("\nThis is what you have in your backpack:")
          print(playerInfo["inventory"])
          print()
          objectToUseBoss = input("What do you want to use?\n")
          if objectToUseBoss == "knife":
            print("\nYou stabbed the monster, looks like it stopped breathing...\n")
            monsterDead = True
          elif objectToUseBoss == "medicine":
            print("\nYou threw the medicine to the monster, it seems like the chemicals blinded him, but he finds you by using his smell\n")
            playerInfo["health"] = 0
          elif objectToUseBoss == "map":
            print("\nNothing you can do with a piece of paper, the monster kills you.\n")
            playerInfo["health"] = 0
        elif whatToDo == "hands":
          print("\nYou aren't strong enough, the monster bites you and kills you.\n")
          playerInfo["health"] = 0
        elif whatToDo == "die":
          print("\nYou accept your death, and die without any struggles.\n")
  '''
        
def whereami():
 
  print(f"You're at {playerInfo['currentplace']}\n")

def checkinv():
  print(playerInfo["inventory"])

def playerHealth():
  print("You have " + str(playerInfo['health']) + " hp")
  print()

def use():
  print("In your backpack you have:")
  checkinv()
  print()
  objectToUse = input("What do you want to use?\n")
  if objectToUse == "knife":
    print("\nYou used your knife and killed yourself\n")
    playerInfo["health"] = 0
  elif objectToUse == "medicine":
    if playerInfo["health"] == 3:
      print("\nYou overdosed because you didn't need the medicine\n")
      playerInfo["health"] = 0
    else:
      print("\nYou healed yourself!\n")
      playerInfo["health"] = 3
  elif objectToUse == "map":
    print()
    whereami()
  elif objectToUse == "key":
    print("You have to search for a door to use this")

def stats():
  global monsterDead
  print("\nYour stats:")
  print("You moved " + str(playerMoved) + " times")
  if monsterDead == True:
    print("You were able to kill the monster!")
  else:
    print("You didn't kill the monster")
  print("You ended up with " + str(playerInfo["health"]) + " hp")
  if playerInfo["currentplace"] == "outside":
    print("You won the game!")
  else:
    print("You lost the game...")

def runGame():
  instructions()
  look()
  global Dead
  while not Dead:
    command = input("What are you going to do?\n")
    print()
    if command == "look":
      look()
    elif command in directions:
      go(command)
    elif command == "help":
      instructions()
    elif command == "search":
      search()
    elif command == "map":
      whereami()
    elif command == "backpack":
      checkinv()
    elif command == "health":
      playerHealth()
    elif command == "quit":
      print("See you next time")
      stats()
      break
    elif command == "use":
     use()
    if playerInfo["health"] == 0:
      print("You died...")
      stats()
      break
    if playerInfo["currentplace"] == "outside":
      print("Thank you for playing")
      stats()
      break
    
runGame()

