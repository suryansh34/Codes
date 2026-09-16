// program to get sets of number whose sum is == target
#include<iostream>
int main(){
    int nums[] = {1,5,8,9};
    int i,j;
    int target;

    std::cout<< "Enter target(a+b from array): ";
    std::cin>>target;


    for(i = 0; i < 4; i++ ){
        for(j=i+1; j < 4; j++){
            if(nums[i]+nums[j]==target){
                std::cout<< "Output: " <<"["<<nums[i]<< "," << nums[j] << "]";
            }
        }
    }

    return 0;
}