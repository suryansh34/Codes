#include<iostream>
#include<vector>
int main() {
    int arr[] = {3,7,2,9,1};
    int target = 5;
    int size = sizeof(arr)/sizeof(arr[0]);
    int i,j;
    for(i=0;i<size;i++){
        for(j=i+1;j<size;j++){
            if(arr[i]+arr[j]==target){
                std::cout<< "index of i : "  << i << std::endl<< "index of j : " << j;
            }
        }
    }

    return 0;
}