#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    int i = 2;
    for(i = 2; i < n; i++){
        if(n%i == 0){cout<<"not a prime number; "<<endl;
        break;
        }
        else{
            cout<<"prime number; ";
        }
        i++;
    }
    return 0;
}