import random as r

p1Poke = None
p2Poke = None
p1Name = None
p2Name = None

class Pokemon():
  def __init__(self, name, type, attack, health, defense, attacks, weaknesses = None, resistances = None):
    self.name = name
    self.type = type
    self.health = health
    self.attack = attack
    self.defense = defense
    self.attacks = attacks
    self.weaknesses = weaknesses
    self.resistances = resistances
    self.luck = r

  #speed = how likely is it to avoid
  #weaknesses and resistances pretty self explanatory

class firePokemon(Pokemon):
  def __init__(self, name):
    #had to use super, wouldnt work if I used Pokemon instead
    super().__init__(name, "firePokemon", r.randint(80, 100), r.randint(100,150),r.randint(50,100), [HeatWave(), Eruption(), Burn()] , ["water"], ["grass"])

class waterPokemon(Pokemon):
  def __init__(self, name):
    super().__init__(name, "waterPokemon", r.randint(80, 100), r.randint(100,150),r.randint(50,100), [WaterGun(), HydroCannon(), Soak()],["grass"], ["fire"])

class grassPokemon(Pokemon):
  def __init__(self, name):
    super().__init__(name, "grassPokemon", r.randint(80, 100), r.randint(100,150), r.randint(50,100), [Metamorphosis(), GrassWhip(), LeafBlade()], ["fire"], ["water"])

class stonePokemon(Pokemon):
  def __init__(self, name):
    super().__init__(name, "stonePokemon", r.randint(80, 100), r.randint(100,150), r.randint(50,100), [StoneAxe(), IronStorm(), Meteorite()], [], [])

class Attack:
  def __init__(self, name, type, basePower):
    self.name = name
    self.type = type
    self.basePower = basePower
    
class HeatWave(Attack):
  def __init__(self):
    super().__init__("Heat Wave","fire", 30)
class Eruption(Attack):
  def __init__(self):
    super().__init__("Eruption","fire", 50)
class Burn(Attack):
  def __init__(self):
    super().__init__("Burn","fire", 40)
    
class WaterGun(Attack):
  def __init__(self):
    super().__init__("Water Gun","water", 40)
class HydroCannon(Attack):
  def __init__(self):
    super().__init__("Hydro-Cannon","water", 50)
class Soak(Attack):
  def __init__(self):
    super().__init__("Soak","water", 30)
    
class Metamorphosis(Attack):
  def __init__(self):
    super().__init__("Metamorphosis","grass", 50)
class GrassWhip(Attack):
  def __init__(self):
    super().__init__("Grass Whip","grass", 30)
class LeafBlade(Attack):
  def __init__(self):
    super().__init__("Leaf Blade","grass", 40)

class StoneAxe(Attack):
  def __init__(self):
    super().__init__("Stone Axe","stone", 30)
class IronStorm(Attack):
  def __init__(self):
    super().__init__("Iron Storm","stone", 40)
class Meteorite(Attack):
  def __init__(self):
    super().__init__("Meteorite","stone", 50)
    
    
def calculateDamage(attack, attPokemon, defPokemon):
  if attack.type in defPokemon.weaknesses:
    typeEffect = 1.2
    print(f"\n{attPokemon.name} used {attack.name} and it was super effective!!")
  elif attack.type in defPokemon.resistances:
    typeEffect = 0.8
    print(f"\n{attPokemon.name} used {attack.name} and it was not very effective...")
  else: 
    typeEffect = 1
    print(f"\n{attPokemon.name} used {attack.name}")
    
  if r.randint(1,10) > 8:
    CDmg = 2
  else: 
    CDmg = 1

  RDmg = r.uniform(0.85,1.0)
  BasePower = attack.basePower
  attAttack = attPokemon.attack
  defDefense = defPokemon.defense
  damageDec = ((typeEffect * CDmg * RDmg * BasePower * attAttack) / defDefense)/2

  damage = round(damageDec)
  if r.randint(1,10) > 9:
    print(f"Wait, {defPokemon.name} was fast and was able to dodge the attack! {defPokemon.name} receives no damage")
  else:
    defPokeHealth = defPokemon.health - damage
    if defPokeHealth < 0:
      defPokeHealth = 0
    defPokemon.health = defPokeHealth
    print(f'{attPokemon.name} dealt {damage} damage to {defPokemon.name}')
    print(f'{defPokemon.name} has {defPokeHealth} health')
##########
Charizard = firePokemon('Charizard')
Groudon = firePokemon('Groudon')
Charmander = firePokemon('Charmander')
Incineroar = firePokemon('Incineroar')
Blaziken = firePokemon('Blaziken')
Squirtle = waterPokemon('Squirtle')
Greninja = waterPokemon('Greninja')
Blastoise = waterPokemon('Blastoise')
Gyarados = waterPokemon('Gyarados')
Mudkip = waterPokemon('Mudkip')
Bulbasaur = grassPokemon('Bulbasaur')
Venusaur = grassPokemon('Venusaur')
Kartana = grassPokemon('Kartana')
Snorlax = grassPokemon('Snorlax')
Celebi = grassPokemon('Celebi')
Onix = stonePokemon('Onix')
Geodude = stonePokemon('Geodude')
Rhydon = stonePokemon('Rhydon')
Arceus = stonePokemon('Arceus')
Golem = stonePokemon('Golem')
Pokemons = [Charizard, Groudon, Charmander, Incineroar, Blaziken, Squirtle, Greninja, Blastoise, Gyarados, Mudkip, Bulbasaur, Venusaur, Kartana, Snorlax, Celebi, Onix, Geodude, Rhydon, Arceus, Golem]
##########
def dealPokemons():
  global p1Poke, p2Poke
  p1Poke = r.choice(Pokemons)
  p2Poke = r.choice(Pokemons)



def askName():
  global p1Name
  global p2Name
  askp1name = input("What's the name of player 1?\n") 
  p1Name = askp1name
  askp2name = input("\nWhat's the name of player 2?\n") 
  p2Name = askp2name
  return p1Name, p2Name
def battleIntro():
  print(f'\nWelcome to the Deve Gym! Today we are having wonderful opponents!')
  print(f'On the left side with his trainer {p1Name}, we have {p1Poke.name}!!!') 
  print(f'And on the right side, we have {p2Poke.name} with his trainer {p2Name}!!!')
  print("Let's start this battle!\n")

def runGame():
  dealPokemons()
  askName()
  battleIntro()
  while True:
    print(f'{p1Name} is now attacking.')
    print(f'Choose the attack you want your {p1Poke.name} to make with a number 1-3')
    attacksp1 = input(f' 1. {p1Poke.attacks[0].name}\n 2. {p1Poke.attacks[1].name}\n 3. {p1Poke.attacks[2].name}\n')
    if attacksp1 == "1":
      calculateDamage(p1Poke.attacks[0], p1Poke, p2Poke)
    elif attacksp1 == "2":
      calculateDamage(p1Poke.attacks[1], p1Poke, p2Poke)
    elif attacksp1 == "3":
      calculateDamage(p1Poke.attacks[2], p1Poke, p2Poke)
    else:
      print("\nYou should type a number 1-3, you lose your turn because dumb")
    if p2Poke.health == 0:
      print(f'{p2Poke.name} has been defeated, {p1Name} wins')
      break
    print()
############
    print(f"It's {p2Name}'s turn.")
    print(f'Choose the attack you want your {p2Poke.name} to make with a number[1-3]')
    attacksp2 = input(f' 1. {p2Poke.attacks[0].name}\n 2. {p2Poke.attacks[1].name}\n 3. {p2Poke.attacks[2].name}\n')   
    if attacksp2 == "1":
      calculateDamage(p2Poke.attacks[0], p2Poke, p1Poke)
    elif attacksp2 == "2":
      calculateDamage(p2Poke.attacks[1], p2Poke, p1Poke)
    elif attacksp2 == "3":
      calculateDamage(p2Poke.attacks[2], p2Poke, p1Poke)
    else:
      print("\nYou should type a number 1-3, you lose your turn because dumb")
    if p1Poke.health == 0:
      print(f'{p1Poke.name} has been defeated, {p2Name} wins')
      break
    print()
runGame()

#Not print the actual list