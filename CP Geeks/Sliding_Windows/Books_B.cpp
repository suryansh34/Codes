#include<iostream>
#include<vector>
using namespace std;

// using lower and upper bound

int main() {
    vector<int>nums;
    int n,t;
    cin>>n>>t;
    
        for (int i = 0; i < n; i++) {
        int n;
        cin >> t;
        }
    int low = 0, high = n - 1;
    int mid = low + (high - low)/2;
    


    if(nums[mid] >= t){
        ans = mid;
        high = mid - 1;
    }
    else{
        low = mid + 1;
    }
    
    return 0;
}