#include<iostream>

int main() {
    std::string name;

    std::cout<< "Enter Your Name: ";
    std::getline(std::cin,name);

    // methods
    /*
    name.length() , name.empty, name.clear(), name.append(), name.at()
    */

    // std::cout<< "Your Name lenght is: " << name.length();
    // name.length() ---> it gives length of the name.
    // if(name.length() > 12){
    //     std::cout<<"\nYour name cant be over 12 character";
    // }
    // name.empty())

    // if(name.empty()){
    //     std::cout<<"You havent entered your name ";
    // }

    // name.clear();
    // std::cout<< name;

    // name.append("@gmail.com");
    // std::cout<< "your username will be: "<< name;

    // std::cout<< " index at 4 will be: " <<name.at(4);

    // name.insert(0,"@");
    // std::cout<<name;

    // std::cout<< name.find('a'); // find first a in my name ( shows the index)

    name.erase(0,3); //starting position and last position to erase.

    std::cout<<name;


    // learn more strings methods from cplusplus.com

    

        return 0;
}