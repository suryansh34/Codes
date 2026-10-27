

#include<iostream>
using namespace std;
int main() {
    int n,m;
    cout<<"enter rows: ";
    cin>>n;
    
    cout<<"enter columns: ";
    cin>>m;
    
    int i = 1;
    
    while(i<=n){
        int count = 1;

        // for numbers in first square
        int j = 1;
        while(j<=n-i+1){
            cout<<j<<" ";
            j++;                    
        }
        // now printing stars in square 1
        int star = i - 1;
        while(star){
            if(!star) cout<<"";
            cout<<"* ";
            star--;
        }

        int k = 1;
        count = i;
        // for star in second square.
        while(star){
            if(!star) cout<<"";
            cout<<"* ";
            star--;
        }
        //for numbers in second square.
        while(k<=n-i+1){
            // int ch  = n - i + 1;
            cout<<n-count+1<<" ";
            // ch++;
            k++;
            count++;
        }
        cout<<endl;
        i++;
    }

    return 0;
}