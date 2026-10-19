// Pattern 1
/*
    * * * *
    * * * *
    * * * *
    * * * *
*/

#include<iostream>
using namespace std;
int main(){
    int n,m;
    cout<<"Enter Rows: ";
    cin>>n;
    cout<<"Enter Coulmns: ";
    cin>>m;
    int i = 1; // why i = 1, base case
    while(i<=n){
        int j = 1;//why j = 1 , base case
        while(j<=m){
            cout<<"* ";
            j++;
        }
        cout<<endl;

        i++;
    }
    return 0;
}


// now practicing with random rows and columns

