#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int x;
    int y;
    char *description;
} Point;

int main(void) {
    int numberOfPoints = 3;
    Point *pointerArrays;

    pointerArrays = malloc(numberOfPoints * sizeof(Point));

    for (size_t i = 0; i < numberOfPoints; i++)
    {
        pointerArrays[i].description = malloc(10);
        strcpy(pointerArrays[i].description, "Test"); 
        pointerArrays[i].x = 2 + i;
        pointerArrays[i].y = 3 + i;

    }

    for (size_t i = 0; i < numberOfPoints; i++)
    {
        printf("Current Point %d (%d, %d) \n", (int)i, pointerArrays[i].x, pointerArrays[i].y);
        printf("Current Comment %s \n", pointerArrays[i].description);

    }

    for (size_t i = 0; i < numberOfPoints; i++)
    {
        free(pointerArrays[i].description);
    }

    free(pointerArrays);
    
    return 0;
}