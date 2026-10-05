#include<iostream>
#include<vector>
#include<map>
using namespace std;
int main() {
    int t;
    cin>> t;
    map<string,int>mp;
    while(t--){

        string s;
        cin>>s;

        if(mp.count(s) == 0){
            cout<<"OK\n";
        }
        else
        {
            cout<< s << mp[s] << endl;
        }
        
    }
    return 0;
}