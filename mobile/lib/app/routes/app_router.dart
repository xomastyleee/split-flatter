import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:riverpod/riverpod.dart';

class AppRouter {
  static final navigatorKey = GlobalKey<NavigatorState>(); // Глобальный ключ NavigatorState

  static final router = GoRouter(
    navigatorKey: navigatorKey,
    initialLocation: '/',
    routes: []
  );
}
