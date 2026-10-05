#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main(){
    int n;
    cin>> n;
    int sum = 0;
    vector<int>arr(n);
    for(int i = 0; i < n; i++){
        cin>>arr[i];
        sum = sum + arr[i];
        arr[i] = sum; // assigning value to the arr of i. arr[i];

    }

    int m;
    cin>>m;

    for(int j = 0; j < m; j++){
        int queries;
        cin>>queries;

        auto lb = lower_bound(arr.begin(),arr.end(),queries);
        int ans = lb - arr.begin();

        cout << ans + 1 << endl; // indexing will be 1 based.
    }
    return 0;
}