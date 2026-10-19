#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> num;

    int start = 0, ans = 0, curr = 0;
    int books, time;

    cin >> books >> time;

    for (int i = 0; i < books; i++) {
        int x;
        cin >> x;
        num.push_back(x);
    }

    for (int e = 0; e < books; e++) {

        curr += num[e];

        while (curr > time) {
            curr -= num[start];
            start++;
        }

        ans = max(ans, e - start + 1);
    }

    cout << ans;

    return 0;
}