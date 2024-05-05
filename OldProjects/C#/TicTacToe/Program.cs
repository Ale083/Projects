using System;
using System.Threading;
class Program
// ! ctrl + c --> stop program execution
{
    public static void Main(string[] args){
        bool playAgain = true;
        while (playAgain){
            bool gameFinish = false;
            players(); // select which player will go first / who will use X and O
            Console.WriteLine("For this tic-tac-toe, you'll need another player. To input your mark, enter the letter of column followed by number of row");
            Console.WriteLine("For example if you want to play on the right middle square, you'll need to enter c2");
            string[,] game = {{"   ", "   ", "   "},{"   ", "   ", "   "},{"   ", "   ", "   "}}; // board 2d array
            while (!gameFinish){
                drawBoard(game); // draw the board

                //variables to control the while loops that allow players to try again if they get invalid input message.
                bool XTurnValid = false;
                bool OTurnValid = false;
                 
                Console.WriteLine("It's X's turn");
                int[] XTurn = new int[2]; //create array of the move X player made.
                while (!XTurnValid){ 
                    int[] TurnTaken = takeTurn();
                    if (TurnTaken[1] != 9 && game[TurnTaken[0],TurnTaken[1]] != " X " && game[TurnTaken[0],TurnTaken[1]] != " O "){ //check if invalid input or already made move.
                        XTurnValid = true;
                    } else {
                        Console.WriteLine("Invalid input or play has already been made, try again.");
                    } XTurn = TurnTaken; //fill the array of the move X player made with TurnTaken to "take it out" of the while loop
                } XTurnValid = false; // return it to its original state
                game[XTurn[0],XTurn[1]] = " X "; // insert the turn in the board.

                if (playerWon(" X ", game)){ // check with the method if player X won the game.
                    gameFinish = true;
                    drawBoard(game);
                    Console.WriteLine("X won!");
                    break;
                } else if(draw(game)){ // check with the method if it's a draw (It's only after X's turn because X always goes first and last)
                    gameFinish = true;
                    drawBoard(game);
                    Console.WriteLine("The game was a draw...");
                    break;
                }
                drawBoard(game);

                
                //make the same with the player using the O
                Console.WriteLine("It's O's turn");
                int[] OTurn = new int[2];
                while (!OTurnValid){ 
                    int[] TurnTaken = takeTurn();
                    if (TurnTaken[1] != 9 && game[TurnTaken[0],TurnTaken[1]] != " X " && game[TurnTaken[0],TurnTaken[1]] != " O "){
                        OTurnValid = true;
                    } else {
                        Console.WriteLine("Invalid input or play has already been made, try again.");
                    } OTurn = TurnTaken;
                } OTurnValid = false; 
                game[OTurn[0],OTurn[1]] = " O "; 

                if (playerWon(" O ", game)){
                    gameFinish = true;
                    drawBoard(game);
                    Console.WriteLine("O won!");
                    break;
                }
            }
            Console.WriteLine("Do you want to play again?(y/n):"); //ask player if they want to play again
            string choice = Console.ReadLine();
            if(choice == "y"){
                Console.WriteLine("Restarting game..."); //restarting the game and making the system wait for 1 second just for miscellaneous reasons.
                Thread.Sleep(1000);
            } else if(choice == "n"){
                Console.WriteLine("Thanks for playing!");
                playAgain = false;
            } else {
                Console.WriteLine("Invalid input, not restarting game.");
                playAgain = false;
            }
        }
    }
    public static void drawBoard(string[,] array){ //Method to draw the board, as simple as that.
        Console.WriteLine("    a   b   c");
        Console.WriteLine("  -------------");
        for (int i = 0; i < 3; i++){
            Console.Write(i+1);
            Console.Write(" ");
            Console.Write("|");
            for (int j = 0; j < 3; j++){
                Console.Write(array[i,j]);
                Console.Write("|");
            }
            Console.WriteLine("");
            Console.WriteLine("  -------------");
        }
    }
    public static int[] takeTurn(){
        string input = Console.ReadLine();
        if (checkInput(input)){ //using another method to check if the input is valid
            //↓↓↓ separates the 2 characters in the input, one stored in the column string and the other in the row string.
            string column = ""; 
            string row = ""; 
            foreach (char c in input){ 
                if (c == 'a' || c == 'b' || c == 'c'){ //checks if the char is the letter
                    int unicode = (int)c; //turns the char into its unicode, for a = 97, b=98, c=99.
                    int numberWeNeed = unicode - 97; //makes it so a = 0, b=1, c=2 (since arrays start from 0), to use it in the game array later on.
                    string result = Convert.ToString(numberWeNeed);
                    column += result; //stores in column string.
                }else if (c == '1' || c == '2' || c == '3'){ //checks if the char is the number
                    string numInString = Convert.ToString(c); //turns it into a string to then turn it into an int, since char to int converts it into the unicode.
                    int num = Convert.ToInt32(numInString);
                    row += num - 1; // stores in row string, -1 so 1=0, 2=1, 3=2, again since arrays start from 0 and it will be used later on.
                }
            }
            //column and row gets converted into an integer and stores in an array that will be returned.
            int columnNum = Convert.ToInt32(column);
            int rowNum = Convert.ToInt32(row);
            int[] turn = {rowNum, columnNum};
            return turn;
        } else { // if input is not valid, it returns an array that contains 9 and 9, which simbolizes an invalid input.
            int[] invalid = {9,9};
            return invalid;
        }

    }
    public static bool checkInput (string input){
        //checks if the length of the input is 2 and if there's only one (1,2,3) char, and one (a,b,c) char. Returns true or false.
        if (input.Length ==2){
            int number = 0;
            int letter = 0;
            foreach (char c in input){
                if (c == 'a' || c == 'b' || c == 'c'){
                    letter += 1;
                } else if (c == '1' || c == '2' || c == '3'){
                    number += 1;
                } else {
                    return false;
                }
            }
            if (number ==1 && letter == 1){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public static void players(){
        //simple method than makes a 50/50 chance on who will be first. Or who will be X. In here, X always goes first.
        Console.WriteLine("Insert name of player 1");
        string p1 = Console.ReadLine();
        Console.WriteLine("Insert name of player 2");
        string p2 = Console.ReadLine();
        Console.WriteLine("");
        Random random = new Random();
        bool fiftyFifty = (random.NextDouble() >= 0.5);  
        if(fiftyFifty){
            Console.WriteLine(p1 + " will use the X, therefore will go first. " + p2 + " will use the O and will go next.");
        } else {
            Console.WriteLine(p2 + " will use the X, therefore will go first. " + p1 + " will use the O and will go next.");
        }
    }

    public static bool playerWon(string sign, string[,] board){
        //checks if a player has won with the different ways to win the game.
        for (int i =0; i<3;i++){
            if(board[i,0] == sign && board[i,1] == sign && board[i,2] == sign){
                return true;
            } else if(board[0,i] == sign && board[1,i] == sign && board[2,i] == sign){
                return true;
            } else if(board[0,0] == sign && board[1,1] == sign && board[2,2] == sign){
                return true;
            } else if(board[2,0] == sign && board[1,1] == sign && board[0,2] == sign){
                return true;
            }
        } return false;
    }

    public static bool draw(string[,] board){
        //checks if the game is a draw if all of the board is filled. This method gets called after the method that checks if it's a win.
        //Therefore if this method returns true, it's for sure a draw since no one won and the board is full.
        int num = 0;
        for(int i = 0; i < 3; i++){
            for(int j = 0; j < 3; j++){
                if(board[i,j] != "   "){
                    num++;
                }
            }
        }
        if(num == 9){
            return true;
        }else{
        Console.WriteLine(num);
        return false;
        }
    }
}

