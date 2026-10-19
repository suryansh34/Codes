#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    long long expected = 1LL * n * (n + 1) / 2;
    long long actual = 0;

    for (int i = 0; i < n - 1; i++) {
        int x;
        cin >> x;
        actual += x;
    }

    cout << expected - actual << endl;

    return 0;
}
