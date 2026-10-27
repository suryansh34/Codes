// Pattern 24 
/*
1 2 3 4 
  2 3 4 
    3 4 
      4 
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

    int count = 1;
    int i = 1;
    while(i<=n){
        int space = i - 1;
        while(space){
            cout<<"  ";
            space--;
        }
        int j = 1;
        count = i;
        while(j<=n-i+1){
            cout<<count<<" ";
            count++;
            j++;            
        }
        cout<<endl;
        i++;
    }    
    
    return 0;
}

