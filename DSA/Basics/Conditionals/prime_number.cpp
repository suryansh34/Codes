// prime or not 
#include<iostream>
using namespace std;
int main() {
    int n;
    cin>>n;
    int i = 2;
    if(n==2){
            cout<<"Number is prime";
        }
    while(i<n){
        if(n%i != 0){
            cout<<"prime for "<<i<<endl;
            i++;
        }
        else{
            cout<<"number is not prime for "<<i<<endl;
            break;
        }
    }
    


    return 0;
}