#include <bits/stdc++.h>
using namespace std;

int main() {

    int n;
    cin >> n;

    vector<pair<int,int>> customer(n);

    for(int i = 0; i < n; i++) {
        cin >> customer[i].first >> customer[i].second;
    }


    // Sort according to arrival time
    sort(customer.begin(), customer.end());


    // Stores when each room becomes free
    vector<int> roomEnd;


    // Stores room number for each customer
    vector<int> answer(n);


    int rooms = 0;


    for(int i = 0; i < n; i++) {

        int arrival = customer[i].first;
        int departure = customer[i].second;

        bool assigned = false;


        // Search for an empty room
        for(int j = 0; j < roomEnd.size(); j++) {

            if(roomEnd[j] < arrival) {

                // reuse this room
                roomEnd[j] = departure;

                answer[i] = j + 1;

                assigned = true;

                break;
            }
        }


        // No free room found
        if(assigned == false) {

            rooms++;

            roomEnd.push_back(departure);

            answer[i] = rooms;
        }
    }


    cout << rooms << "\n";


    for(int i = 0; i < n; i++) {
        cout << answer[i] << " ";
    }


    return 0;
}