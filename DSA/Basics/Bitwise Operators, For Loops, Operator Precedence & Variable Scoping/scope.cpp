#include<iostream>
#include<vector>
using namespace std;

int main() {
    
    // int a;
    int a= 3;
    cout<< a << endl; //return garbage value, if a is not declared.
    
    if(true){
        int a = 5;
        cout << a << endl;
    }
    return 0;
}