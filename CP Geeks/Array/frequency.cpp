#include<iostream>
int main() {
    int arr[] = {2,1,1,2,3,3,2,4};

    // int i = arr[0];
    int count = 0;
    int num = 3;

    for(int j = 0; j <= 7; j++){
        if(arr[j]==num){
            count = count + 1;
        }    
    }
    std::cout<<"frequency of "<< num << ":"<<count;
    return 0;
}