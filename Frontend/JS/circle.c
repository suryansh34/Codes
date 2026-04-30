#include <stdio.h>
#include <math.h>
int main()
{
    int r = 10; // radius
    for (int y = -r; y <= r; y++)
    {
        for (int x = -r; x <= r; x++)
        {
            if (x * x + y * y <= r * r + r * 0.8 && x * x + y * y >= r * r - r * 0.8)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }
    return 0;
}