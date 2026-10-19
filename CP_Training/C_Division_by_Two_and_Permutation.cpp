
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n;
        cin >> n;

        vector<int> a(n);

        for (int i = 0; i < n; i++) {
            cin >> a[i];
        }

        vector<bool> used(n + 1, false);
        bool possible = true;

        for (int i = 0; i < n; i++) {
            while (a[i] > 0) {
                if (a[i] <= n && !used[a[i]]) {
                    used[a[i]] = true;
                    break;
                }

                a[i] /= 2;
            }

            if (a[i] == 0) {
                possible = false;
                break;
            }
        }

        if (possible) {
            cout << "YES" << endl;
        } else {
            cout << "NO" << endl;
        }
    }

    return 0;
}
