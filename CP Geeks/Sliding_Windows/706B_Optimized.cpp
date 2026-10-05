// lower Bound
#include<algorithm>
#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    sort(arr.begin(),arr.end());

    int days;
    cin>> days;

    for(int j =0; j < days; j++){
        int coins;
        cin>> coins;

        // int count = 0;
        // while(coins>=arr[j]){
        //     count++;
        // }
        // for(int i =0; i<n;i++){
        //     if(coins>=arr[i]){
        //         count++;
        //     }
        // }

        // cout<< count<< endl;
        auto aw = upper_bound(arr.begin(),arr.end(),coins);
        int ans = aw - arr.begin();

        cout<< ans <<endl;

    }
    
    return 0;
}