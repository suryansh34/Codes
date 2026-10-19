// 2 ki power n.

#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int helper(int n ){
    if(n==0)
        return 1;

    return 2 * helper(n-1);
}
int main(){

    int n;
    cin>>n;

    int ans = helper(n);

    cout<<ans;
    return 0;
}