#include<iostream>
using namespace std;
void change(int arr[]){
    arr[0] = 10;
}
int main() {
    int arr[] = {1,2,4,6,8};
    cout<<arr[0]<<endl;
    change(arr);
    cout<<arr[0];
    
    return 0;
}

// arrays ar passed by refernce.