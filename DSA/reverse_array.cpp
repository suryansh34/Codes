#include<iostream>

int main() {
    int nums[] = {2,7,4,0,1};
    int n = 4;

    // Reverse the array and print the elements
    for(int i = n; i >= 0; i-- ){
        std::cout<< "Element at Index " << i << " : "<< nums[i] << '\n';
    }

    return 0;
}