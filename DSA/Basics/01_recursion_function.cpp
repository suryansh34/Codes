//  recursive funnction
#include <iostream>
int f(int x)
{
    if (x == 0)
    {
        return 0;
    }
    else{
        return 2* f(x -1) + x * x;
    }

    int main(){
        int x =3;

        return 0;
    }

}

// non-terminating function

int bad(int n){
    if(n==0){
        return 0;

    }
    else
    {
        return bad(n/3+1) + n - 1;  
    }
}