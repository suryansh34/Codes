#include<iostream>
using namespace std;
int main() {
    int a[] = {10,20,30,40,50};
    int size = sizeof(a)/sizeof(a[0]);    
    int i = 0, j = size - 1;
    while(i<j){
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }
    for(i=0;i<size;i++){
        std::cout<<a[i]<< " ";
    }


    return 0;
}    