# MongoDB $inc operator error with non-numeric value
This example demonstrates an error that occurs when using the MongoDB $inc operator with a non-numeric value. The $inc operator is designed to increment numeric values, and using it with other data types will result in an error.

## Bug
The provided code attempts to increment a non-numeric value using the $inc operator. This results in an error because the $inc operator is only designed to work with numeric values.

## Solution
To fix this error, ensure that you are using the $inc operator only with numeric values. If you need to increment a non-numeric value, you will need to use a different approach, such as replacing the entire field with an updated value.