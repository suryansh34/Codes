#include<iostream>

int searchArray(std::string array[],int size, std::string element);

int main() 
{
    std::string foods[] = {"pizza","burger","hotdog"};
    int size = sizeof(foods)/sizeof(foods[0]);
    // int numbers[] = {1,2,3,4,5,6,7,8,9,10};
    // int size = sizeof(numbers)/sizeof(numbers[0]);
    int index;
    // int myNum;
    std::string myFood;

    std::cout<< "Enter element to search for: " << '\n';
    std::getline(std::cin,myFood);
    // std::cin>> myNum;


    // index = searchArray(numbers, size, myNum);
    index = searchArray(foods, size, myFood);

    if(index != -1){
        std::cout<< myFood << " is at index "<< index;
    }else{
        std::cout<< myFood << " is not in array ";        
    }


    return 0;
}
// int searchArray(int array[],int size, int element){
int searchArray(std::string array[],int size, std::string element){

    for(int i = 0; i< size; i++){
        if(array[i] == element){
            return i;
        }        
    }
    return -1; // as a setinal value
}