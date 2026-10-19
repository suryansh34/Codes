// Pattern 8 
/*
    1 
    2 3 
    3 4 5 
    4 5 6 7 
*/

#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cout<<"Enter Rows: ";
    cin>>n;
    int i = 1;
    int value;
    while(i<=n){
        int j = 1;
        value = i; //? without this homework
        while(j<=i){
            cout<<value<<" ";
            value++;
            j++;
        }
        cout<<endl;
        i++;
    }
    
    
    return 0;
}