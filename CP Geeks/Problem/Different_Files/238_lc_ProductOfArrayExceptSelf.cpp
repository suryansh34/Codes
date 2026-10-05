// can be solved with segment tree
// but we are using prefix sum approach.

#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> answer(n, 1);

    // Product of elements to the left
    int prefix = 1;

    for (int i = 0; i < n; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    // Product of elements to the right
    int suffix = 1;

    for (int i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }

    return answer;
}

int main() {
    vector<int> nums = {1, 2, 3, 4};

    vector<int> result = productExceptSelf(nums);

    cout << "Result: ";

    for (int x : result) {
        cout << x << " ";
    }

    cout << endl;

    return 0;
}
