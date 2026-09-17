#include<iostream>

int main() {
    int arr[]= {3,8,2,7,2,9,3};
    int size = sizeof(arr)/sizeof(arr[0]);
    int i,j;

    for(i=0;i<size;i++){
        for(j=i+1;j<size;j++){
            if(arr[i]==arr[j]) {
                std::cout<<"Duplicate Found which are: " << arr[i] << std::endl;
                break;
            
            }
        }
    }    
    return 0;
}