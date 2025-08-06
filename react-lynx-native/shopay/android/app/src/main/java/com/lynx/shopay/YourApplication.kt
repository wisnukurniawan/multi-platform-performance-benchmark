package com.lynx.shopay

import android.app.Application
import android.content.Intent
import android.os.Handler
import android.os.Looper
import android.util.Log
import com.facebook.drawee.backends.pipeline.Fresco
import com.facebook.imagepipeline.core.ImagePipelineConfig
import com.facebook.imagepipeline.memory.PoolConfig
import com.facebook.imagepipeline.memory.PoolFactory
import com.lynx.devtoolwrapper.LynxDevtoolGlobalHelper
import com.lynx.service.devtool.LynxDevToolService
import com.lynx.service.image.LynxImageService
import com.lynx.service.log.LynxLogService
import com.lynx.tasm.LynxEnv
import com.lynx.tasm.service.LynxServiceCenter
import com.lynx.service.http.LynxHttpService
import papa.PapaEventListener
import papa.PapaEventLogger

class YourApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        Log.d("AppLaunch", "Native App onCreate: " + System.currentTimeMillis() + " ms");

        PapaEventListener.install(PapaEventLogger())

        initLynxService()
        initLynxEnv()
    }

    private fun initLynxService() {
        // init Fresco which is needed by LynxImageService
        val factory = PoolFactory(PoolConfig.newBuilder().build())
        val builder =
            ImagePipelineConfig.newBuilder(applicationContext).setPoolFactory(factory)
        Fresco.initialize(applicationContext, builder.build())

        LynxServiceCenter.inst().registerService(LynxImageService.getInstance())
        LynxServiceCenter.inst().registerService(LynxLogService)
        LynxServiceCenter.inst().registerService(LynxHttpService)

        // register devtool service
        LynxServiceCenter.inst().registerService(LynxDevToolService.INSTANCE)
    }

    private fun initLynxEnv() {
        LynxEnv.inst().init(
            this,
            null,
            null,
            null
        )
        // Turn on Lynx Debug
        LynxEnv.inst().enableLynxDebug(true)
        // Turn on Lynx DevTool
        LynxEnv.inst().enableDevtool(true)
        // Turn on Lynx LogBox
        LynxEnv.inst().enableLogBox(true)
        // Create a Handler associated with the main thread's Looper
        val mainHandler = Handler(Looper.getMainLooper())
        // Register OpenCard for Lynx DevTool
        LynxDevtoolGlobalHelper.getInstance().registerCardListener { url ->
            mainHandler.post {
                val intent = Intent(
                    applicationContext,
                    DebugActivity::class.java
                )
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                intent.putExtra("url", url)
                startActivity(intent)
            }
        }
    }
}
