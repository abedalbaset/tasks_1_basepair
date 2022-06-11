
# Exercise 03 - Charts #

Context: This is the second part of exercise 02. If you don't have/haven't completed exercise 02, then you can use the following data as the request response:

```JSON
{
  "objects": [{
    "name": "Score 1",
    "data": [10, 15, 8, 15, 32],
  }, {
    "name": "Score 2",
    "data": [8, 12, 16, 10, 2],
  }, {
    "name": "Score 3",
    "data": [11, 24, 9, 9, 13],
  }],
}
```

Requirement:
- Create a ReactJS application that will consume the endpoint of the exercise 02.
- The page should contain 2 sections:
  - The first section should be an input that will allow the users to filter and request the Series records from the Django REST API.
  - The second section should be a chart to plot the records returned by the request. Each record should be represented with a different color.

# What will be evaluated #
- The design pattern used to architect the solution.
- The quality of the code.
- The usability of the filter.
- The chosen chart to represent the data.
Note: Working solution will have an extra consideration.
