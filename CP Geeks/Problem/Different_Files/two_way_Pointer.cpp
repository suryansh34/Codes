#include<iostream>

int main() {
    int arr[] = {-8,1,4,6,10,45};
    int target = 16;
    int n = sizeof(arr)/sizeof(arr[0]);
    int left = 0;
    int right = n - 1;
    bool ans;

    while(left<right){
        if(arr[left]+arr[right]==target){
            std::cout<< arr[left] << arr[right];
        }
        else if (arr[left]+arr[right]<target){
            left++;
    
        }else{
            right++;
        }
        ans = false;
    }

    return 0;
}