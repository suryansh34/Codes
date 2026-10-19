// Pattern 17
/*
    D 
    C D 
    B C D 
    A B C D 
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

        char ch = 'A' + n - i;
        while(j<=i){
            cout<<ch<<" ";
            ch = ch + 1;
            j++;
        }
        cout<<endl;
        i++;
     }
    
    
    return 0;
}

