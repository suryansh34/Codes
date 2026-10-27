// Pattern 24 
/*
      1 
    2 2 
  3 3 3 
4 4 4 4  

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
    while(i<=n){
        int j = 1;
        int space = n - i;
        while(space){
            cout<<"  ";
            space--;
        }
        while(j<=i){
            cout<<i<<" ";
            j++;            
        }
        cout<<endl;
        i++;
    }    
    
    return 0;
}

