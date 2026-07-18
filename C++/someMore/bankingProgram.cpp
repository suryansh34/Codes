#include<iostream>
#include<iomanip> //precision for floating point numbers
void showBalance(double balance);
double deposit();
double withdraw(double balance);

int main()
{
    double balance = 1000.05;
    int choice = 0;

    

    do{

        std::cout<< "\n*****************\n";
        std::cout<< "Enter your choice:\n";
        std::cout<< "\n*****************\n";
        std::cout<< "1. Show Balance\n";
        std::cout<< "2. Deposit Money\n";
        std::cout<< "3. Withdrawl Money\n";
        std::cout<< "4. Exit\n";
        std::cin>> choice;

        // if invalid it will continues runs to prevent we use clear and fflush.
        std::cin.clear();
        fflush(stdin); 

        switch(choice){
        case 1: showBalance(balance);
        break;
        case 2: balance = balance + deposit();
        showBalance(balance); 
        break;
        case 3: balance = balance - withdraw(balance);
        showBalance(balance);
        break;
    
        case 4: std::cout<< "Thanks for visiting our Bank!\n";
        default: std::cout<<"Invalid Choice";
        break;

    }

    }while(choice != 4 );
    

    

    return 0;
}

void showBalance(double balance){
    std::cout<< "Your Balance is: $"<<std::setprecision(2) << std::fixed << balance <<'\n';
}
double deposit(){
    double amount = 0;
    std::cout<< "Enter amount to deposit: ";
    std::cin>> amount;

    if(amount < 0){
        std::cout<< " enter a valid amount to deposit\n";
        return 0;
    }else{
        return amount;
    }
}
double withdraw(double balance){
    double amount = 0;

    std::cout<<"Enter amount to withdraw: ";
    std::cin>> amount;

    if(amount > balance){
        std::cout<< "Insufficient Balance to withdraw\n";
        return 0; // this came to fixed nan number.
    }else if (amount < 0){
        std::cout<< "Enter a valid number to withdraw\n";
    }else{        
        return amount;
    }
}