// Dynamic Array --> can grow its size
// Problem of array --> Fixed Size.

// push_back(), pop_back(),size()
// sort(v.begin(), v.end()) --> for sorting vector
// reverse(v.begin(), v.end()) --> for reversing vector



#include<iostream>
#include<vector>
using namespace std;
    int main() {
    int n;
    cout<<"Enter size of an array: ";
    cin>>n;
    // int arr[n];
    vector<int> arr(n);
    // for(int i = 0; i < n; i++){
    //     cin>>arr[i];
    // }
    for(int i = 0; i < n; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}