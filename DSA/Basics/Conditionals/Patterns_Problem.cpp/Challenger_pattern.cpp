// Challenging Pattern

/*
          1 
        1 2 1 
      1 2 3 2 1 
    1 2 3 4 3 2 1 
*/
#include<iostream>
using namespace std;
int main() {
    int n,m;
    cout<<"Enter Rows: ";
    cin>>n;
    
    cout<<"Enter Columns: ";
    cin>>m;

    int i = 1;

    while(i<=n){
        // space print
        int space = n - i;
        while(space){
            cout<<"  ";
            space--;
        }
        // element at first traingle
        int j = 1;
        while(j<=i){
            cout<<j<<" ";
            j++;
        }
        
        // second triangle
        int start = i - 1;
        while(start){
            // cout<<endl;
            cout<<start<<" ";
            start--;
        }
        cout<<endl;
        i++;
    }

    return 0;
}