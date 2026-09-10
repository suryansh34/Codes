//  print non-negative integer by 
#include<iostream>
void printOut(int n){
    if(n>=10){
        printOut(n/10);
    }
    else
    {
        printOut(n%10);
    }
}
int main(){
    
    return 0;

}