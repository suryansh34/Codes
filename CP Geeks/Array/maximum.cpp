#include<iostream>

int main() {
    int array[5] = {3,7,8,2,5};

    // finds maximum:
    int size = 5;
    int store = 0;

    for(int i=0; i < size; i++){
        for(int j = i + 1; j < size; j++){
            if(i>j){
                store = store + i;
            } 
            break;
        }
    }

    std::cout<< i;

    return 0;
}