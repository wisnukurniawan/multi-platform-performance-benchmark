package com.example.shopay

import android.app.Application
import android.util.Log
import papa.PapaEventListener
import papa.PapaEventLogger

class App : Application() {
    override fun onCreate() {
        super.onCreate()
        Log.d("AppLaunch", "Native App onCreate: " + System.currentTimeMillis() + " ms");

        PapaEventListener.install(PapaEventLogger())

    }
}