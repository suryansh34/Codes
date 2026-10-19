#include<iostream>
#include<vector>
using namespace std;
int main() {
    int n, q;
    cin >> n >> q;

    string s;
    cin >> s;

    vector<int> prefix(n + 1, 0);

    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + (s[i] - 'a' + 1);
    }

    while (q--) {
        int l, r;
        cin >> l >> r;

        cout << prefix[r] - prefix[l - 1] << '\n';
    }

    return 0;
}