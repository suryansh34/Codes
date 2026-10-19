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
    while(i <= n){
        int j = 1;
        while(j <= m){  
            char ch = 'A'+i+j-2; 
            cout<<ch<<" ";
            j++;
        }
        cout<<endl;
        i++;
    }
    return 0;
}

/*
    main formula -  i+j-1 = 1 (for 1,1)

    then for char, we use add 'A' - 1 both sides
    'A' - 1 + i + j - 1 = 'A' - 1 + 1
    ///?['A' + i + j  - 2 = 'A'] formula for this question

*/