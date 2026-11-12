#include<iostream>
#include<vector>
#include<algorithm>
#include<math.h>
using namespace std;


    int solve(vector<int>& coins, int amount) {
        // Base Case
        if(amount == 0) return 0;
        if(amount < 0) return INT_MAX;

        int mini = INT_MAX;

        // try every coin
        for(int coin : coins){
            int ans  = solve(coins, amount - coin);

            if(ans != INT_MAX){
                mini = min(mini, 1+ans);
            }
        }
        return mini;
    }
    int coinChange(vector<int>& coins, int amount) {
        int ans = solve(coins,amount);

        return ans == INT_MAX ? -1 : ans;
    }    
};