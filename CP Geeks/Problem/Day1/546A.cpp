#include<iostream>
using namespace std;
int main() {
    int k,w,n;
    cin>> k >> n >> w;
    int calculation = k*w*(w+1)/2;
    if(calculation<n) cout<<0;
    else cout<<calculation - n;

    return 0;
}


// try with frquency array