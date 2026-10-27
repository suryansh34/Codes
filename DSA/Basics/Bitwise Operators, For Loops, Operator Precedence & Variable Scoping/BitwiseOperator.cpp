// Bitwise Operator

/*
    &- AND , | - OR , ~ - NOT , ^ - XOR
*/
#include<iostream>
#include<vector>
using namespace std;
int main() {
    int a = 4;
    int b = 5;

    cout<<"a&b: "<< (a&b) <<endl;
    cout<<"a|b: "<< (a|b) <<endl;
    cout<<"~a: "<<~a<<endl;
    cout<<"a^b: "<< (a^b) <<endl;
    
    cout<<"Left Shift and Right Shift "<<endl;
    cout<<(19<<1)<<endl;
    cout<<(17>>1)<<endl;
    cout<<(17>>2)<<endl;
    cout<<(21<<2)<<endl;


    //! Pre Increment and Post Increment is important for interview round 
    return 0;
}