// Pattern 12 
/*
    A B C D E 
    F G H I J 
    K L M N O 
    P Q R S T 
    U V W X Y 
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
    int k = 0; // correct position
    while(i<=n){
        int j = 1;
        while(j<=m){
            char ch = 'A'+ k; 
            cout<<ch<<" ";
            k++;
            j++;
        }
        cout<<endl;
        i++;
    }
    
    return 0;
}