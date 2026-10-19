#include <iostream>
using namespace std;

int main() {
    int arr[] = {2, 4, 8, 12, 16};
    int size = sizeof(arr)/4;
    // Updating first element
    arr[0] = 90;


    for(int i = 0; i <= size - 1; i++){
        cout << arr[i] << endl;
    }
    
    return 0;
}