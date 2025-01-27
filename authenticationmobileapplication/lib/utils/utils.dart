import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void showSnackBar(BuildContext context, String text) {
    ScaffoldMessenger.of(context).showSnackBar (
      SnackBar(content: Text(text),
    ), );
}

 void httpErrorHandle({
    required http.Response response,
    required BuildContext context,
    required VoidCallback onSuccess,
  }) 
  {
    switch (response.statusCode) {
    case 200:
      // Handle success
      onSuccess();
      break;
    case 400:
      // Decode the response body and show the error message in the SnackBar
      var decodedResponse = jsonDecode(response.body);
      String errorMsg = decodedResponse['msg'] ?? 'Something went wrong';
      showSnackBar(context, errorMsg);
      break;
    case 500:
      showSnackBar(context, 'Internal Server Error');
      break;
    default:
      showSnackBar(context, 'Unexpected error occurred');
  }
  }
