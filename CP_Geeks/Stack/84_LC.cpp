#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> heights(n);
    for (int i = 0; i < n; i++) {
        cin >> heights[i];
    }


    int left = 0, right = 0, maxArea = 0;
    int minHeight;

    for(int i = 0; i < heights.size(); i++ ){
        int minHeight = heights[i];
        left = i;
        right = i;
    }


    while(left > 0 && heights[left-1] >= minHeight){
        left--;
    }

    while(right < heights.size() - 1 && heights[right]){
        right++;
    }
    
    return 0;
}