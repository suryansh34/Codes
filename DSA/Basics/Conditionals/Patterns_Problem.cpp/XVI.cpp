// Pattern 14 
/*
    A 
    B B 
    C C C 
*/
#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n,m;
    cout<<"enter rows: ";
    cin>>n;
    // cout<<"enter col: ";
    // cin>>m;

    int i = 1;
    // char count = 'A';
     while(i<=n){

        int j = 1;

        while(j<=i){
            char ch = 'A' + i + j - 2;
            cout<<ch<<" ";
            j++;
        }
        cout<<endl;
        i++;
     }
    
    
    return 0;
}

