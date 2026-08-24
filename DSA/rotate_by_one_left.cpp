// Array Rotate by right
#include<iostream>

int main() {
    int nums[] = {5,8,0,9}; //  {5,8,0,5,0}
    int n = 4;
    int i;

    int element = nums[n-4];

    // shift the element to right
    for(i = 1;i<=3;i++){        
        nums[i-1] = nums[i];
    }
    // last element assign to 1st position
    nums[n-1] = element;

    for(i=0;i<n;i++){
        std::cout<< "Element at Index " << i << " : "<< nums[i] << '\n';
    }


    return 0;
}