#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n,m;
    cout<<"enter rows: ";
    cin>>n;
    cout<<"enter col: ";
    cin>>m;
    char ch = 'A';
    int i = 1;
    while(i<=n){
        int j = 1;
        while(j<=m){
            char ch = 'A'+i-1;
            cout<<ch<<" ";
            j++;
        }
        cout<<endl;
        i++;
    }
    
    return 0;
}