// Pattern 7
/*
    1 
    2 3 
    4 5 6 
    7 8 9 10 
*/
#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cout<<"Enter Rows: ";
    cin>>n;
    int count = 1;
    int i = 1;
    while(i<=n){
        int j = 1;
        while(j<=i){
            cout<<count<<" ";
            count++;
            j++;
        }
        cout<<endl;
        i++;
    }
    
    
    return 0;
}