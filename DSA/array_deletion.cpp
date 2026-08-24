#include<iostream>

int main() {
    int nums[] = {2,6,9,3,5};
    int n = 5;
    int pos,val;
    int size = sizeof(nums)/sizeof(nums[0]);


    std::cout<<"Enter Position to  delete: ";
    std::cin>>pos;

    // nums[pos] == 0; // ye karne ke jarorat hi nahi hai.


    for(int i = pos + 1; i<=n; i++ ){
        nums[i-1] = nums[i];
    }

    for(int i=0;i<n-1;i++){
        std::cout<< "Element at "<< i << " : " << nums[i] << '\n';
    }
    


    return 0;
}