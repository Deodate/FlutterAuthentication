import 'package:authenticationmobileapplication/models/user.dart';
import 'package:flutter/material.dart';

class UserProviders extends ChangeNotifier {
  User _user = User(
    id: '',
    name: '',
    email: '',
    token: '',
    password: '',
  );

  // Getter to access the user data
  User get user => _user;

  void setUser(String user) {
     _user = User.fromJson(user);
     notifyListeners();
  }

  // Setter to update the user data
  void updateUser(User updatedUser) {
    _user = updatedUser;
    notifyListeners();  // Notifies listeners when the user data changes
  }

  void setUserFromModel(User user){
    _user = user;
    notifyListeners();
  }
}
