import 'dart:convert';

class User {
  final String id;
  final String name;
  final String email;
  final String token;
  final String password;

  User({
    required this.id,
    required this.name,
    required this.email,
    required this.token,
    required this.password,
  });

  // Convert User object to Map (for JSON serialization)
  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'email': email,
      'token': token,
      'password': password,
    };
  }

  // Optionally, you can also add a fromMap constructor to convert a map back to a User object
  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      id: map['_id'],
      name: map['name'],
      email: map['email'],
      token: map['token'],
      password: map['password'],
    );
  }

  // Convert User object to JSON string
  String toJson() => json.encode(toMap());

  // Convert JSON string to User object
  factory User.fromJson(String source) => User.fromMap(json.decode(source));
}
