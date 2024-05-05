#define a function that calculates the distance between 2 points
# the parameters of this function could be pairs of x and y

'''
class Point():
  def __init__(self, x, y=5):
    self.x = x
    self.y = y
  def distance(self, p2):
    dx = self.x - p2.x
    dy = self.y - p2.y
    return math.sqrt(dx**2 + dy**2)
  def __str__(self):
    return f"{self.x}, {self.y}"
p1 = Point(10)
p2 = Point(0,200)

print(p1.distance(p2))
'''
# a function that is attached to a class is a method
# a variable that is attached to a class is an attribute/property
# the __init__(initialize) is the constructor function that specifies the initial values

# define a pet class that has 3 properties. Name, age...

class Pet():
  def __init__(self, name, color, isAlive):
    self.name = name
    self.color = color
    self.isAlive = isAlive
  def __str__(self):
    if self.isAlive == True:
      petStatus = "alive"
    elif self.isAlive == False:
      petStatus = "not alive"
    else:
      petStatus = self.isAlive
      
    return f"My pet is named {self.name}, he is color {self.color}, and is {petStatus}"


class Dog(Pet):
  def __init__(self, name, color, isAlive):
    super().__init__(name, color, isAlive)
  def bark(self):
    return f"{self.name}: Bark! Bark!"



class Pug(Dog):
  def __init__(self, name, color, isAlive):
    super().__init__(name, color, isAlive)
  def hyperventilate(self):
    return f"*{self.name} Hyperventilates*"
    # Idk how hyperventilation sounds like lol

class Chihuahua(Dog):
  def __init__(self, name, color, isAlive):
    super().__init__(name, color, isAlive)
  def screams(self):
    return f"{self.name}: AWRARWARAWRA"

dog1 = Dog("Alex", "Red", "Alive")
print(dog1)
print(dog1.bark())
print()

pug1 = Pug("Pinky", "White", "Alive")
print(pug1)
print(pug1.hyperventilate())
print()

chihuahua1 = Chihuahua("Max", "Black", "Alive")
print(chihuahua1)
print(chihuahua1.screams())
print()


# define a subclass of dog (two breeds)
#define methods for each one
# https://www.w3schools.com/python/python_classes.asp