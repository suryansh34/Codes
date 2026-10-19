// pattern III

/*
    4 3 2 1 
    4 3 2 1 
    4 3 2 1 
    4 3 2 1 
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
            cout<<n-j+1<<" "; // main formula -- //!(n-j+1)
            j++;
        }
        cout<<endl;
        i++;
    }
    return 0;
}