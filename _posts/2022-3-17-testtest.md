---
layout: post
title: "test" 
description: "test"
tag: test 
---
```C
#include<stdio.h>
void main()
{
	int a[2][2]={1,2,3,4};
	int *b;
	b=a[0];
	int **c;
	c=a;
	printf("%d",b[1]);
}
```