// Pattern 18 ( with starting index method)
/*
    A B C 
    B C D 
    C D E  
*/
#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n,m;
    cout<<"enter rows: ";
    cin>>n;
    cout<<"enter col: ";
    cin>>m;

    int i = 1;
    // char count = 'A';
     while(i<=n){

        int j = 1;

        char ch = 'A' + i + j - 2;
        while(j<=m){
            cout<<ch<<" ";
            ch = ch + 1;
            j++;
        }
        cout<<endl;
        i++;
     }
    
    
    return 0;
}

