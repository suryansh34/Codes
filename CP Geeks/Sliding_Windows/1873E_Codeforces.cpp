// formula:
//     ∑(aᵢ + 2 * width)


//     curr += (a[i] + 2)


#include <iostream>
#include <vector>

using namespace std;


int main(){

    int t;
    cin >> t;


    while(t--){

        int n;
        long long c;

        cin >> n >> c;


        vector<long long> s(n);


        for(int i = 0; i < n; i++){
            cin >> s[i];
        }


        long long low = 1;
        long long high = 1e9;

        long long ans = 0;


        while(low <= high){

            long long mid = low + (high-low)/2;


            long long area = 0;


            for(int i = 0; i < n; i++){

                long long side = s[i] + 2*mid;

                area += side * side;


                // optimization
                if(area > c)
                    break;
            }


            if(area == c){

                ans = mid;
                break;

            }
            else if(area < c){

                low = mid + 1;

            }
            else{

                high = mid - 1;

            }

        }


        cout << ans << endl;

    }


    return 0;
}