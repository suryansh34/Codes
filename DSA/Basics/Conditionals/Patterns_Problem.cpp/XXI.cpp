// Pattern 21 ( with starting index method)
/*
    * * * *     
    * * *     
    * *     
    *
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
        // print spaces
        int star = n - i + 1;         
        while(star){
             cout<<"* ";
             star--;
            }
        
        // print stars
        int j = 1;
        while(j<=m){
            cout<<" ";
            j++;
        }
        cout<<endl;
        i++;
     }
    
    
    return 0;
}

