#include<iostream>

int main() {
    int nums[] = {2,6,4,9,1};
    int size = sizeof(nums)/sizeof(nums[0]); // i learned this.
    int n = 5;
    int pos, val;

    std::cout<<"Enter value to insert: ";
    std::cin>>val;

    std::cout<<"Enter position to insert: ";
    std::cin>>pos;
    
    // this is to print element index by index.
    // for(int i=0;i<n;i++){
    //     std::cout<<"Element at " << i << " : "<<nums[i]<< '\n';
    // }

    // for(int i=0;i<n;i++){
    //     if(i==pos){
    //         nums[i+1] = nums[i];
    //     }
        // std::cout<<"Element at " << i << " : "<<nums[i]<< '\n';
    // }

    for(int i=n;i>=pos;i--){
        nums[i+1] = nums[i];

    }

    nums[pos] = val;

    for(int i=0;i<=size;i++){
        std::cout<<"Element at " << i << " : "<<nums[i]<< '\n';
    }



    return 0;
}