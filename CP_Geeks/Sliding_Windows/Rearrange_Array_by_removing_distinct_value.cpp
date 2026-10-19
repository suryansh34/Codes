#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {

    int n;
    cin >> n;

    vector<int> nums(n);

    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }

    vector<int> ans;

    while (!nums.empty()) {

        vector<int> temp;

        // Find distinct elements
        for (int i = 0; i < nums.size(); i++) {

            bool found = false;

            for (int j = 0; j < temp.size(); j++) {

                if (nums[i] == temp[j]) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                temp.push_back(nums[i]);
            }
        }

        // Sort distinct elements
        sort(temp.begin(), temp.end());

        // Take one of each distinct element
        for (int x : temp) {

            ans.push_back(x);

            for (int i = 0; i < nums.size(); i++) {

                if (nums[i] == x) {
                    nums.erase(nums.begin() + i);
                    break;
                }
            }
        }
    }

    cout << "Answer: ";

    for (int x : ans) {
        cout << x << " ";
    }

    cout << endl;

    return 0;
}