// pattern 3
/*
    1 2 3 4 
    1 2 3 4 
    1 2 3 4 
    1 2 3 4 
*/

#include<iostream>
using namespace std;
int main() {
    int n,m;
    cout<<"Enter Rows: ";
    cin>>n;
    cout<<"Enter Coulmns: ";
    cin>>m;

    int i = 1;
    while(i<=n){

        int j = 1;
        while(j<=m){
            cout<<j<<" ";
            j++;
        }
        cout<<endl;
        i++;
    }
    return 0;
}