#include<iostream>
using namespace std;
int main(){

    // int arr[4] = {2,5,7,9};
    int arr[4] = {0}; // values of array --> { 0,0,0,0}
    cout<< sizeof(arr) << " ";
    cout<< arr[1] << " ";

    for(int i=0;i<4;i++){
        cout<< arr[i] << " ";
    }

    return  0;
}