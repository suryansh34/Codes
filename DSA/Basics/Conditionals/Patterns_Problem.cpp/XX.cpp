// Pattern 18 ( with starting index method)
/*
        * 
      * * 
    * * *  
*/
#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n,m;
    cout<<"enter rows: ";
    cin>>n;

    int i = 1;
    // char count = 'A';
     while(i<=n){
        // print spaces
        int space = n - i;         
        while(space){
             cout<<"  ";
             space--;
            }
        
        // print stars
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

