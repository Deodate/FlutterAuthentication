import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:authenticationmobileapplication/utils/utils.dart';
import 'package:authenticationmobileapplication/models/user.dart';

import '../utils/constants.dart';

class AuthServices {

  void SignUpUser(
    {
      required BuildContext context,
       required String email,
    required String password,
    required String name,
    }
  ) async {
    try{
      User user = User(
        id: '',
        name: name,
        password: password,
        email: email,
        token: '',
      );

      http.Response res = await http.post(
        Uri.parse('${Constants.uri}/api/signup'),
        body: user.toJson(),
        headers: <String, String> {
           'Content-Type': 'application/json; charset=UTF-8',
        },
        );
        httpErrorHandle(
          response: res,
          context: context,
          onSuccess: (){
            showSnackBar(context, 'Account created! Login with the same credentials!', );
          },

        );
    } catch (e){
    showSnackBar(context, e.toString());
    }
  }
}