#include<iostream>
using namespace std;
int main() {
    int t;
    cin>>t;

    for(int i=0;i<t;i++){
        int x,y;
        cin>>x>>y;

        if(x%2==1 && y%2==1){
            std::cout<<"NO\n";
        }
        else{
            cout<<"YES\n";
        }
    }
    return 0;
}