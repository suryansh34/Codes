#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    long long t;
    cin >> n >> t;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {        
        cin >> arr[i];
    }
    
    int start = 0, curr = 0, ans = 0;

    for (int end = 0; end < n; end++) {
        curr = curr + arr[end];
        
        while(curr>t){
            curr = curr - arr[start];
            start = start + 1;      
        }
        ans = max(ans,end - start + 1);
    }
    
    cout<< ans << endl;
    
    return 0;
}