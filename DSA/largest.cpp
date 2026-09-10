#include<iostream>

int main() {
    int nums[]= {5,7,9,4};
    int i=0;

    if(nums[i]>nums[i+1] && nums[i]>nums[i+2] && nums[i]>nums[i+3]){
        std::cout<< "The Largest Number is : " << nums[i];
    }else if(nums[i+1]>nums[i] && nums[i+1]>nums[i+2] && nums[i+1]>nums[i+3]){
        std::cout<< "The Largest Number is : " << nums[i+1];
    }else if(nums[i+2]>nums[i] && nums[i+2]>nums[i+1] && nums[i+2]>nums[i+3]){
        std::cout<< "The Largest Number is : " << nums[i+2];
    }
    else if(nums[i+3]>nums[i] && nums[i+3]>nums[i+1] && nums[i+3]>nums[i+2]){
        std::cout<< "The Largest Number is : " << nums[i+3];
    }

    return 0;
}