#include<iostream>

int main() {
    int arr[]= {8, 2, 4, 5, 3, 7, 1};
    int size = sizeof(arr)/sizeof(arr[0]);
    int count = 0;
    bool result;

    int finalSum;
    finalSum = (size+1)*(size+2) / 2;

    for(int i = 0; i < size; i++){
        count = count + arr[i];
    }
    std::cout<<"Missing Element: "<< finalSum - count;
    return 0;
}