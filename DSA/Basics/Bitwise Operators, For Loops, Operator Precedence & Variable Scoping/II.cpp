#include<iostream>
#include<vector>
using namespace std;

int main() {
    int a = 1;
    int b = 2;

    if(a-- > 0 || ++b > 2){
        cout<<"Stage1: ";
    }
    else{
        cout<<"Stage2: ";
    }
    cout<< a << " " << b << endl;
    return 0;
}