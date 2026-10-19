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

    int i = 1;
     while(i<=n){

        int j = 1;

        while(j<=i){
            char ch = 'A'+i-1;
            cout<<ch<<" ";
            j++;
        }
        cout<<endl;
        i++;
     }
    
    
    return 0;
}