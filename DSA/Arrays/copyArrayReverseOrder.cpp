#include<iostream>
using namespace std;
int main() {
    int a[] = {10,20,30,40,50};
    int size = sizeof(a)/sizeof(a[0]);
    int i,j; 
    
    std::cout<<"Normal Array: ";
    for(i=0;i<size;i++){
        cout<<a[i]<< " ";
        // cout<<endl;
    }
    int b[size];
    for(i=0;i<size;i++){
        b[i]= a[size-1-i];
        // cout<<endl;
    }
    cout<<endl;
    std::cout<<"Reversed Array: ";
    for(i=0;i<size;i++){
        cout<<b[i]<< " ";
        // cout<<endl;
    }
    return 0;
}