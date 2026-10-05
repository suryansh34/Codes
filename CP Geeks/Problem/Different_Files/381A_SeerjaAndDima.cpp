// #include<iostream>
// #include<vector>
// using namespace std;
// int main() {
//     // int n ;
//     // cin>>n;
//     int arr[] = {4,1,2,10};
//     int n = 4;
//     int i = 0;
//     int inti_seerja = 0;
//     int inti_dima = 0;
//     int seerja_point, dima_point;

//     while(n--){
//         while(i<4){

//             if(arr[i]>arr[n-i-1]){
//                 seerja_point = inti_seerja + arr[i];
//                 dima_point = inti_dima + arr[n-i-1];
//             }
//             else if(arr[i]<arr[n-i-1])
//             {
//                 seerja_point = inti_seerja + arr[n-i-1];
//                 dima_point = inti_dima + arr[i];
//             }

//             i++;
//         }

//     }

//     cout<<seerja_point<<' '<<dima_point;

//     return 0;
// }

n = size of array;
int i = 0;
j = n - 1;
while (i < j)
{
    if (arr[i] > arr[j])
    {
        seerja_point += arr[i];
        j--;
    }
    else if(arr[i]<arr[j])
    {
        seerja_point += arr[j];
        i++;
    }


    
}
