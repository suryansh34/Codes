#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main(){
    // number of piles
    int n;
    cin>>n;

    vector<int> prefix(n);

    int sum = 0;
    for(int i=0; i<n; i++){
        int x;
        cin>>x;

        sum = sum + x; //prefix sum 
        prefix[i] = sum; // making array with prefix sum
        
    }

    int m;
    cin>>m;

    int ans = 0;
    
    int q;
    for(int j =0; j<m; j++){
        cin>>q;//taking inputs of queries

        auto lb = lower_bound(prefix.begin(),prefix.end(),q);
        int ans = lb - prefix.begin();
        cout<< ans + 1 << endl; //+1 because indexing start from 1.
    }    

    return 0;
}