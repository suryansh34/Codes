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
        while(j<=n){
            char ch = 'A'+j-1; //main formula //! 'A' + j - 1;
            cout<<ch<<" ";
            j++;
        }
        cout<<endl;
        i++;
    }
    
    return 0;
}