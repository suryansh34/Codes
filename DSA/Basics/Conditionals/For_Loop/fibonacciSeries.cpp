#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    int a = 0;
    int b = 1;
    cout<<a<<endl;
    cout<<b<<endl;
    for(int i = 0; i < n; i++){
        int nextNum = a + b;
        cout<<nextNum<<endl;
        a = b;
        b = nextNum;
    }
    
    return 0;
}   