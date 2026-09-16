// find the doublet in the array whose sum is equal to the given value x.
#include<iostream>

int main() {
    int arr[] = {3,7,1,4,-7};
    int size = sizeof(arr)/sizeof(arr[0]);
    int x = 0;
    int i,j;

    for(i = 0; i < size; i++){
        for(j=i+1; j < size; j++){
            if(arr[i]+arr[j]==x){
                std::cout<<"i : "<<arr[i] << " j : "<< arr[j];
            }
        }
    }
    return 0;
}