#include<iostream>
using namespace std;
int helper(int n){

    // base case
    // if(n == 0){
    //    return 1; 
    // }

    return n * helper(n - 1);
}

int main(){

    int n;
    cin>>n;
    cout<<helper(n);
    return 0;
}