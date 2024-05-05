using System;
using System.Linq;
class Program
{
    public static void Main(string[] args)
    {
        /*
        * Create a program that asks the user for a password, and checks if it matches the original.
        string secret = "password"; 
        Console.WriteLine("Enter the secret word:");
        string userInput = Console.ReadLine(); 
        if (userInput == secret)
        {
            Console.WriteLine("Correct"); 
        } else {
            Console.WriteLine("Wrong password");
        }
        */


        /*
        *Make a program that reads the temperature in celsius and converts it to fahrenheit.
        Console.WriteLine("Enter temperature in Celsius");
        int celsiusTemp = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Your temperature is " + (celsiusTemp * 1.8 + 32) + " in Fahrenheit");
        */


        /*
        * Write a program that calculates the average of 3 numbers the user gives you.
        Console.WriteLine("Enter 3 numbers");
        int int1 = Convert.ToInt32(Console.ReadLine());
        int int2 = Convert.ToInt32(Console.ReadLine());
        int int3 = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("The average of the numbers you gave is " + (int1 + int2 +int3)/3);
        */


        /*
        * Make a program that print the numbers in an array from smallest to largest and vice versa.
        int[] array = {70, 10, 80, 20, 30, 40};
        Array.Sort(array);
        foreach(int i in array) {
            Console.Write(i + " ");
        }
        Array.Reverse(array);
        foreach(int i in array) {
            Console.Write(i + " ");
        }
        */


        /*
        * Write a program that checks how many duplicate numbers are in an array.
        int[] array = {0, 10, 25, 37, 0, 41, 5, 8, 25, 10, 37};
        int duplicates = array.Length - array.Distinct().Count();
        
        Console.WriteLine("There are " + duplicates + " duplicates");
        */


        /*
        * Ask the user for 5 big cities and print them in alphabetical order
        Console.WriteLine("Enter 5 big cities");

        string city1 = Console.ReadLine();
        string city2 = Console.ReadLine();
        string city3 = Console.ReadLine();
        string city4 = Console.ReadLine();
        string city5 = Console.ReadLine();

        string[] citiesArray = {city1, city2, city3, city4, city5};
        Array.Sort(citiesArray);
        foreach(string i in citiesArray) {
            Console.Write(i + ", ");
        }
        */


        /*
        * Make a program that checks if a number is even or odd.
        Console.WriteLine("Give me a number");
        int userInput =Convert.ToInt32(Console.ReadLine());
        if(userInput%2 == 0){
            Console.WriteLine("The number is even.");
        } else {
            Console.WriteLine("The number is odd.");
        }
        */


        /*
        * Make a calculator that allows the user to add, subtract, divide and multiply
        Console.WriteLine("Give me the two numbers you'll use in the calculator");
        float num1 = Convert.ToInt32(Console.ReadLine());
        float num2 = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Do you want to add, subtract, multiply or divide?");
        string operation = Console.ReadLine();
        if (operation == "add"){
            Console.WriteLine(num1 + num2);
        }else if (operation == "subtract"){
            Console.WriteLine(num1 - num2);
        } else if (operation == "multiply"){
            Console.WriteLine(num1 * num2);
        } else if (operation == "divide"){
            if (num2 == 0){
            Console.WriteLine("Cannot divide by zero");
            }else{
            Console.WriteLine(num1 / num2);
            }
        } else {
            Console.WriteLine("Operation not supported");
        }
        */


        /*
        * Write a program that prints the alphabet
        string[] alphabet = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"};
        Console.WriteLine("The alphabet:");
        for(int i = 0; i < alphabet.Length; i++){
            Console.Write(alphabet[i] + " ");
        }
        // it can also be done by using char 
        for (char x = 'a'; x <= 'z'; x++){
            Console.Write(x + " ");
            }
        */


        /* 
        * Write a C program to check whether an alphabet is vowel or consonant.
        string vowels = "aeiou";
        Console.WriteLine("Give me a letter");
        string userInput = Console.ReadLine();

        if(vowels.Contains(userInput)){
            Console.WriteLine("the letter is a vowel");
        } else {
            Console.WriteLine("the letter is a consonant");
        }
        */


        /* 
        * Write a C# program to check how many vowels or consonants a word has
        char[] vowelList = {'a', 'e', 'i', 'o', 'u'};
        Console.WriteLine("Give me a word");
        string userInput = Console.ReadLine();

        int vowels = 0;
        int consonants = 0;
        foreach(char letter in userInput){
        if(vowelList.Contains(letter)){
            vowels += 1;
        } else {
            consonants += 1;
        }
        }
        Console.WriteLine("The word has " + vowels + " vowels and " + consonants + " consonants");
        */


        /*
        * Let’s write a C# program to find the sum of all natural numbers between 1 to maximum number entered by the user.
        int total = 0;
        Console.WriteLine("Give me a number");
        int maxNum = Convert.ToInt32(Console.ReadLine());
        for(int i = 1; i<maxNum; i++){
            total += i;
        }
        Console.WriteLine("the sum of all natural numbers between 1 and " + maxNum + " is " + total);
        */


        /*
        * Write a program to find factorial of a number
        int factorial = 1;
        Console.WriteLine("Give me a number to calculate its factorial");
        int userInput = Convert.ToInt32(Console.ReadLine());
        for(int i = 1; i <= userInput; i++){
            factorial = factorial * i;
        }
        Console.WriteLine("the factorial of " + userInput + " is " + factorial);
        */


        /* 
        * Write a program to find factors of a number
        Console.WriteLine("Give me a number to find its factors");
        int userInput = Convert.ToInt32(Console.ReadLine());
        List<int> factors = new List<int>();
        for (int i = 1; i <= userInput; i++){
            if(userInput%i == 0){
            factors.Add(i);
            }
        }
        Console.WriteLine("The factors of " + userInput + " are:");
        foreach(int i in factors){
            Console.Write(i + ", ");
        }
        */


        /*
        * Write a C# Program that will allow the user to input a number and then checks whether that number is a Palindrome Number or not.
        Console.WriteLine("Give me a number to check if it is a Palindrome Number");
        int userInputInt = Convert.ToInt32(Console.ReadLine());
        string userInputString = Convert.ToString(userInputInt);
        string reverse = "";
        for (int i = userInputString.Length - 1; i >= 0; i--){
            reverse += userInputString[i];
        }
        if (reverse == userInputString) {
            Console.WriteLine("The number is a Palindrome Number");
        } else {
            Console.WriteLine ("The number is not a Palindrome Number");
        }
        /*


        /*
        * Ask the user how many fibonacci numbers would they want to print and print them
        Console.WriteLine("How many numbers from the fibonacci sequence would you like to print?");
        int userInput = Convert.ToInt32(Console.ReadLine());
        List<int> fibonacci = new List<int>();
        fibonacci.Add(1);
        fibonacci.Add(1);

        for(int i = 0; i < userInput; i++){
            if ( i == 0 || i == 1){
            continue;
            }else if ( i<0){
            Console.WriteLine("Input error");
            }else{
            int nextNum = fibonacci[i-2] + fibonacci[i-1];
            fibonacci.Add(nextNum);
            }
        }
        Console.WriteLine("The fibonacci sequence with " + userInput + " numbers looks like:");
        for(int i = 0; i < userInput; i++){
            Console.Write(fibonacci[i] + ", ");
        }
        */


        /*
        * Ask user for a number and check if it's an armstrong number.
        Console.WriteLine("Give me a number and I'll check if it's an armstrong number.");
        string userInput = Console.ReadLine();
        int inputLength = userInput.Length;
        int result = 0;
        for (int i = 0; i < inputLength; i++){
            int num = Convert.ToInt32(userInput[i].ToString()); // ! Need to understand
            int powerNum = (int)Math.Pow(num,inputLength);
            result += powerNum;
        }
        if (Convert.ToInt32(userInput) == result) {
            Console.WriteLine("This is an armstrong number");
        } else {
            Console.WriteLine("This is not an armstrong number");
        }
        */


        /* 
        * Write a simple C# method that will take two numbers and return the sum
        Console.WriteLine("Tell me two numbers and I'll give you the sum");
        int num1 = Convert.ToInt32(Console.ReadLine());
        int num2 = Convert.ToInt32(Console.ReadLine());
        int sum = addition(num1, num2);
        Console.WriteLine(sum);
        */


        /*
        * Write 4 methods that will calculate the area of a triangle, square, rectangle and circle. Ask user which one to use.
        Console.WriteLine("The area of which shape do you want to calculate? (triangle, square, rectangle or circle)");
        string shape = Console.ReadLine();
        if (shape == "triangle"){
            Console.WriteLine("What's the height of the triangle in meters?");
            float height = float.Parse(Console.ReadLine());
            Console.WriteLine("What's the length of the base of the triangle in meters?");
            float baseLength = float.Parse(Console.ReadLine());
            Console.WriteLine("The area of the triangle is " + areaOfTriangle(height, baseLength) + " meters");
        } else if (shape == "square"){
            Console.WriteLine("What's the length of the side of the square in meters?");
            float sideLength = float.Parse(Console.ReadLine());
            Console.WriteLine("The area of the square is " + areaOfSquare(sideLength) + " meters");
        } else if (shape == "rectangle"){
            Console.WriteLine("What's the length of the rectangle in meters?");
            float length = float.Parse(Console.ReadLine());
            Console.WriteLine("What the width of the rectangle in meters?");
            float width = float.Parse(Console.ReadLine());
            Console.WriteLine("The area of the rectangle is " + areaOfRectangle(length, width) + " meters");
        }else if (shape == "circle"){
            Console.WriteLine("What's the radius of the circle in meters?");
            float radius = float.Parse(Console.ReadLine());
            Console.WriteLine("The area of the circle is " + areaOfCircle(radius) + " meters");
        } else {
            Console.WriteLine("Shape not supported");
        }
        */


        /*
        * Count the Character Occurrence in a String in C#:
        Console.WriteLine("Enter a string:");
        string userInput = Console.ReadLine();

        int[] charCount = new int[128]; //apparently 128 is the number of characters existent.

        foreach (char c in userInput){
            int codePoint = (int)c; // each char has a number that represents it named code point.
            charCount[codePoint]++;
        }
        for (int i = 0; i < charCount.Length; i++){
            if (charCount[i] > 0){
            char character = (char)i;
            Console.WriteLine(character + " is repeated " + charCount[i] + " times");
            } else {
            ;
            }
        }
        */


        /*
        * Take the input as a string from the user and then we will convert that string in reverse order 
        Console.WriteLine("Enter a string:");
        string userInput = Console.ReadLine();
        string reverse = "";
        for (int i = userInput.Length - 1; i >= 0; i--){
            reverse += userInput[i];
        }
        Console.WriteLine(reverse);
        */


        /*
        * Test for converting characters to their unicode.
        string userInput = Console.ReadLine();
        foreach (char c in userInput){
            int codePoint = (int)c;
            Console.WriteLine("The codepoint for " + c + " is " + codePoint);
        }
        */


        /* 
        *Decimal to binary conversion in C#
        Console.WriteLine("Tell me a number so I can convert it to binary");
        float userInput = float.Parse(Console.ReadLine());
        string binaryProcess = "";
        string actualBinary = "";
        if (userInput % 1 == 0) {
            while (userInput != 1 && userInput != 0){
            float remainder = userInput % 2;
            userInput = (float)Math.Floor(userInput / 2); 
            binaryProcess += remainder;
            }
            binaryProcess += userInput;
            for (int i = binaryProcess.Length - 1; i >= 0; i--){
            actualBinary += binaryProcess[i];
            }
            
            Console.WriteLine($"The binary of the number you gave is {actualBinary}");
        } else {
            Console.WriteLine("Your number is not valid");
        }
        */

        /*
        * Binary to Decimal conversion in C#
        Console.WriteLine("Tell me a binary number so I can convert it to a decimal");
        string userInput = Console.ReadLine();
        string actualBinary = "";
        double decimalValue = 0;
        for (int i = userInput.Length - 1; i >= 0; i--){
            actualBinary += userInput[i];
        }
        for (int i = 0; i < actualBinary.Length; i++){
            string number = Convert.ToString(actualBinary[i]);
            Console.WriteLine(decimalValue);
            decimalValue += Math.Pow(2,i) * Convert.ToInt32(number);
            Console.WriteLine(Convert.ToInt32(actualBinary[i]) + " " + decimalValue + " " + (int)Math.Pow(2,i));
        }
        Console.WriteLine($"The decimal number of the binary is: {decimalValue}");
        */




    }

/* 
* Method for addition.
static int addition(int x, int y){
  return x + y;
}
*/

/*
  * Method for area of triangle
 static float areaOfTriangle(float x, float y) {
  return (x * y) / 2;
 }
*/

/*
  * Method for area of square
 static float areaOfSquare(float x){
  return x*x;
 }
*/

/*
 * Method for area of rectangle
 static float areaOfRectangle(float x, float y){
  return x*y;
 }
*/

/*
 * Method for area of circle
 static float areaOfCircle(float x){
  return 3.14f * (x*x);
 }
*/






}