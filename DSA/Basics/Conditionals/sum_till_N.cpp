#include<iostream>
using namespace std;
int main() {
    int n;
    cout<<"Enter numbers to print the sum: ";
    cin>>n;
    int i = 2;
    int sum = 0;

    while(i<=n){
        sum = sum + i;
        i++;
    }

    cout<<"the sum of the numbers is: "<< sum;
    return 0;
}