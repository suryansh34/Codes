
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    if (n < 2) {
        cout << "Number is not prime" << endl;
        return 0;
    }

    int i = 2;

    while (i < n) {
        if (n % i == 0) {
            cout << "Number is not prime" << endl;
            return 0;
        }
        i++;
    }

    cout << "Number is prime" << endl;

    return 0;
}
