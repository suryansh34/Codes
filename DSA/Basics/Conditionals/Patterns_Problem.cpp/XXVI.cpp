#include<iostream>
using namespace std;
int main(){
    int n,m;
    cout<<"Enter Rows: ";
    cin>>n;
    
    cout<<"Enter Columns: ";
    cin>>m;
    int count = 1;
    int i = 1;

    while(i<=n){

        int j = 1;
        int space = n - i;
        while(space){
            cout<<"  ";
            space--;
        }
        
        while(j<=i){
            cout<<count<<" ";
            count++;
            j++;
        }
        cout<<endl;
        i++;
    }


    return 0;

}