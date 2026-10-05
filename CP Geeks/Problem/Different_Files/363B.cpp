#include <iostream>
#include<vector>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> a(n + 1);
    vector<int> prefix(n + 1, 0);

    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        prefix[i] = prefix[i - 1] + a[i];
    }

    int maxi = INT32_MAX;
    int ans = 0;

    for (int i = k; i <= n; i++) {
        int sum = prefix[i] - prefix[i - k];

        if (sum < maxi) {
            maxi = sum;
            ans = i - k + 1;
        }
    }

    cout << ans << endl;

    return 0;
}