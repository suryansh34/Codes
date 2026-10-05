#include<iostream>
using namespace std;
int main() {
    int num;
    cin>>num;
    // for even kilos to start , we have given num > 2 also.
    if(num > 2 && num%2==0){
        std::cout<<"YES\n";
    }else cout<< "NO\n";
    
    return 0;
}