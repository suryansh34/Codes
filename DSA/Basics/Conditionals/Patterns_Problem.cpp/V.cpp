// Pattern 5 ( traingle pattern)

/*
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
*/
#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cout<<"Enter Rows: ";
    cin>>n;

    int i = 1;
    while(i<=n){
        int j = 1;
        while(j<=i){ 
            cout<<"*"<<" ";
            j++;
        }
        cout<<endl;
        i++;
    }

    
    return 0;
}