// Pattern 23 
/*
        * 
      * * 
    * * *  
*/
#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cout<<"enter rows: ";
    cin>>n;

    int i = 1;
    while(i<=n){
        int j = 1;
        int space = i - 1;
        while(space){
            cout<<"  ";
            space--;
        }
        while(j<=n - i + 1){
            cout<<i<<" ";
            j++;            
        }
        cout<<endl;
        i++;
    }    
    
    return 0;
}

