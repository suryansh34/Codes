#include<iostream>
using namespace std;
int main() {
    string name;
    cin>>name;
    int size = sizeof(name)/sizeof(name[0]);
    int left = 0;
    int right = size - 1;

    while(left<=right){
        if(name[left]==name[right]){
            std::cout<<"Y\n";

        }
    }

    return 0;
}