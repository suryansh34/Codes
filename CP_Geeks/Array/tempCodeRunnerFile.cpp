#include<iostream>

int main() {
    int arr[] = {2,1,1,2,3,3,2,4};

    int i = arr[0];
    int count = 0;

    for(int j = arr[0]; j < sizeof(arr); j++){
        if(arr[j]==2){
            count = count + 1;

        }
    
    }

    std::cout<<count;
    return 0;
}