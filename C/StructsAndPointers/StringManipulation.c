#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUFFER_SIZE 4096

int main(void) {
    int totalOfWords = 0;

    char **strings;

    printf("Enter number of strings: ");
    scanf("%d", &totalOfWords);
    strings = malloc(totalOfWords * sizeof(char *));

    char buffer[BUFFER_SIZE];
    int length = 0;

    while (getchar() != '\n');

    printf("\n");
    for (int i = 0; i < totalOfWords; i++)
    {
        printf("Enter string %d: ", i +1);
        fgets(buffer, BUFFER_SIZE, stdin);
        length = strlen(buffer);
        buffer[length-1] = '\0';
        strings[i] = malloc(length * sizeof(char));
        strcpy(strings[i], buffer);
    }

    printf("\nResulting strings array: \n\n");
    for (int i = 0; i < totalOfWords; i++)
    {
        printf("strings[%d] = %s\n", i, strings[i]);
    }

    for (int i = 0; i < totalOfWords; i++)
    {
       free(strings[i]);
    }
    
    free(strings);

    return 0;
}

