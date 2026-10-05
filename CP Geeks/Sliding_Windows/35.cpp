#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    int size = arr.size();
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    int target; cin>>target;

    int low = 0, high = size - 1;
    int mid = low + (high - low)/2;
    while(low <= high){
        if(arr[mid]==target){
            
        }
    }

    
    return 0;
}