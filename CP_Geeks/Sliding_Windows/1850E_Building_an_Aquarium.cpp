#include <iostream>
#include <vector>

using namespace std;

int main() {

    int t;
    cin >> t;

    while(t--) {

        int n;
        long long x;

        cin >> n >> x;

        vector<int> arr(n);

        for(int i = 0; i < n; i++) {
            cin >> arr[i];
        }


        long long low = 0;
        long long high = 1000000000LL + x;
        long long ans = 0;


        while(low <= high) {

            long long mid = low + (high - low) / 2;

            long long water = 0;


            for(int i = 0; i < n; i++) {

                if(arr[i] < mid) {
                    water += mid - arr[i];
                }

            }


            if(water <= x) {
                ans = mid;
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }


        cout << ans << endl;
    }

    return 0;
}