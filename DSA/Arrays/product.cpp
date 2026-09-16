#include<iostream>
int main() {
    // product of elements

    int arr[]= {2,7,9};
    int size = sizeof(arr)/sizeof(arr[0]);
    int product = 1;
    for(int i = 0; i < size; i++){product = product * arr[i];}
    std::cout<<product;
    return 0;
}