// prime or not 

// approach 
/*
    if check 5 is prime

    1 2 3 4 5 , we check that remainder from 2-4 is not 0 , then it is prime.
*/
#include<iostream>
using namespace std;
int main() {
    int n;
    cin>>n;
    int i = 2;
    // base case
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