#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main() {
    string n;
    cin>>n;
    vector<char> arr;
    for(int i = 0; i < n.size();i++){
        if(n[i] != '+'){
            arr.push_back(n[i]);
        }
    }

    sort(arr.begin(),arr.end());
    
    for(int i = 0; i < arr.size(); i++){
        if(i > 0){
            cout<<'+';
        }

        cout<<arr[i];
    }
    return 0;
}