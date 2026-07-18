#include<iostream>

/*
break = break out the loop.
continue = skip cuurent iteration.
*/
int main() {
    for(int i = 1; i <= 10; i++){
        if(i == 7){
            continue; // skip 
        }else if (i == 9){
            break; // break out the loop.

        }
        std::cout<< i <<'\n';

    }
    return 0;
}