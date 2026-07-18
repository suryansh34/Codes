#include<iostream>
#include<ctime>
#include<cstdlib>


char getUserChoice();
char getComputerChoice();
void(showChoice(char choice));
void chooseWinner(char player, char computer);

int main() {

    char player;
    char computer;

    player = getUserChoice();
    std::cout<< "Your Choice: ";
    showChoice(player);
    
    computer = getComputerChoice();
    std::cout<< "Computer Choice: ";
    showChoice(computer);

    chooseWinner(player,computer);

    
    return player;
}

char getUserChoice(){
    char player;
    std::cout << "Rock-Paper-Scissor Game\n";

    do{
        std::cout << "Choose one of the following\n";
        std::cout << "***********************\n";
        std::cout << "'r' for rock\n";
        std::cout << "'p' for paper\n";
        std::cout << "'s' for scissor\n";
        std::cin>> player;

    }while(player != 'r' && player !='R' && player != 'p' && player !='P' && player != 's' && player !='S');
    
    
    return player;  

}
char getComputerChoice(){
    srand(time(0));
    int num = rand()  % 3 + 1;

    switch(num){
        case 1: return 'r';
        break;
        case 2 : return 'p';
        break;
        case 3 : return 's';
        break;
        
    }

}
void(showChoice(char choice)){

    switch(choice){
        case 'r':
        case 'R': 
            std::cout<< "Rock\n";
        break;

        case 'p':
        case 'P': 
            std::cout<< "Paper\n";
        break;
        case 's': 
        case 'S':
            std::cout<< "Scissor\n";
        break;
    }
}
void chooseWinner(char player, char computer){
    switch(player){
        case 'r': if(computer == 'r'){
                    std::cout<<"It's a tie!\n";
        }else if(computer == 's'){
                    std::cout<<"You Won!";
        }else{
            std::cout<< "You Lose!";
        }break;

        case 'p': if(computer == 'r'){
                    std::cout<<"You Win!\n";
        }else if(computer == 's'){
                    std::cout<<"You Lose!";
        }else{
            std::cout<< "It's a tie!";
        }break;

        case 's': if(computer == 'r'){
                    std::cout<<"You Lose!\n";
        }else if(computer == 's'){
                    std::cout<<"It's a tie!";
        }else{
            std::cout<< "You Won!";
        }break;


    }
}