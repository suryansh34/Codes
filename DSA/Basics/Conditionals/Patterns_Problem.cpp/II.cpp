// Pattern 2
/*
    1 1 1
    2 2 2
    3 3 3
*/

#include<iostream>
using namespace std;
int main(){
    int n,m;
    cout<<"Enter Rows: ";
    cin>>n;
    cout<<"Enter Coulmns: ";
    cin>>m;

    int i = 1;

    while(i<=n){
        
        int j = 1;
        while(j<=m){
           cout<< i <<" ";
           j++;
        }
        cout<<endl;
        i++;
    }

    return 0;
}