// Array Rotate 
#include<iostream>

int main() {
    int nums[] = {5,8,0,9}; //  {5,8,0,5,0}
    int n = 4;
    int i;

    int element = nums[n-1];

    // shift the element to right
    for(i = n - 1;i>0;i--){        
        nums[i] = nums[i-1];
    }
    // last element assign to 1st position
    nums[0] = element;

    for(i=0;i<n;i++){
        std::cout<< "Element at Index " << i << " : "<< nums[i] << '\n';
    }


    return 0;
}